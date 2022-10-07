import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useEffect, useState } from 'react';
import Popup from '../Popup/Popup';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { filterMovies } from '../../utils/filter';

function App() {

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [savedMoviesAfterFilter, setSavedMoviesAfterFilter] = useState(JSON.parse(localStorage.getItem("savedMoviesAfterFilter")));
  const [savedMoviesArray, setSavedMoviesArray] = useState([]);
  const [isDataRecieved, setIsDataRecieved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [isTokenCheckLoading, setIsTokenCheckLoading] = useState(true);

  const history = useHistory();

  const handleChangeIsDataRecieved = (isDataRecieved) => {
    setIsDataRecieved(isDataRecieved);
  };

  const handleBurgerMenuClick = () => {
    isPopupOpened ? setIsPopupOpened(false) : setIsPopupOpened(true);
  }

  const handleCloseButtonClick = () => {
    setIsPopupOpened(false);
  }

  const handleGetSavedMovies = (searchValue, isShortMoviesIncluded) => {
    return mainApi.getSavedMovies().then((savedMovies) => {
      if (!savedMovies) {
        throw new Error('Сохраненные файлы не найдены');
      }

      const savedMoviesAfterFilter = filterMovies(searchValue, isShortMoviesIncluded, savedMovies);

      localStorage.setItem('savedMoviesAfterFilter', JSON.stringify(savedMoviesAfterFilter));
      localStorage.setItem('searchSavedMovies', searchValue);
      localStorage.setItem('isShortSavedMoviesIncluded', isShortMoviesIncluded);

      setSavedMoviesAfterFilter(savedMoviesAfterFilter);
      setIsDataRecieved(true);
    });
  };

  const handleGetAllSavedMovies = () => {
    mainApi.getSavedMovies().then((savedMovies) => {
      if (!savedMovies) {
        throw new Error('Сохраненные фильмы не найдены');
      }
      setSavedMoviesArray(savedMovies);
      setIsDataRecieved(true);
    }).catch((err) => {
      handleBadTokenLogOut(err);
    });
  }

  const handleChangeMovieSavingStatus = (movie, isSaved) => {
    if (isSaved) {
      if (movie.id !== undefined) {
        let savedMovieForRemove;
        savedMoviesArray.forEach((savedMovie) => {
          if (savedMovie.movieId === movie.id) {
            savedMovieForRemove = savedMovie;
          }
        });
        handleDeleteSavedMovie(savedMovieForRemove._id);
      } else {
        handleDeleteSavedMovie(movie._id);
      }
    } else {
      handleSaveMovie(movie);
    }
  }

  const handleDeleteSavedMovie = (id) => {
    mainApi.deleteSavedMovie(id).then((deletedMovie) => {
      handleGetAllSavedMovies();

      const newArray = savedMoviesAfterFilter.filter((savedMovie) => savedMovie._id !== id);
      setSavedMoviesAfterFilter(newArray);
      localStorage.setItem('savedMoviesAfterFilter', JSON.stringify(newArray));
    }).catch((err) => {
      handleBadTokenLogOut(err);
    });
  }

  const handleSaveMovie = (movie) => {
    mainApi.postSavedMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: "https://api.nomoreparties.co/" + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: "https://api.nomoreparties.co/" + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    }).then((savedMovie) => {
      handleGetAllSavedMovies();
    }).catch((err) => {
      handleBadTokenLogOut(err);
    });
  };

  const handleUpdateUserInfo = ({ email, name }) => {
    return mainApi.patchProfileInfo({ email, name }).then((user) => {
      if (!user) {
        throw new Error('Пользователь не найден');
      }
      setUserData(user);
    });
  };

  const handleRegister = ({ email, password, name }) => {
    return mainApi.postUser({ email: email, password: password, name: name }).then((user) => {
      handleLogin({ email, password }).catch((err) => {
        handleBadTokenLogOut(err);
      });
    });
  };

  const handleLogin = ({ email, password }) => {
    return mainApi.postUserAuth({ email: email, password: password }).then((res) => {
      if (res) {
        localStorage.setItem('token', res.data);
        setIsTokenCheckLoading(true);
        tokenCheck();
        history.push('/movies');
      }
    });
  };

  const tokenCheck = () => {
    if (localStorage.getItem('token')) {
      mainApi.getProfileInfo()
        .then((res) => {
          if (res) {
            let userData = {
              id: res._id,
              email: res.email,
              name: res.name
            }
            setLoggedIn(true);
            setUserData(userData);
            setIsTokenCheckLoading(false);
          }
        })
        .catch((err) => {
          handleBadTokenLogOut(err);
        });
    }
    else {
      setIsTokenCheckLoading(false);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setSavedMoviesArray([]);
    setUserData(null);
    setIsTokenCheckLoading(false);
    setLoggedIn(false);
    history.push('/');
    localStorage.clear();
  }

  const handleBadTokenLogOut = (err) => {
    if (err.status === 401) {
      handleLogOut();
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  if (isTokenCheckLoading) {
    return <></>;
  }

  return (
    <CurrentUserContext.Provider value={userData}>
      <Header
        onBurgerMenuClick={handleBurgerMenuClick}
        loggedIn={loggedIn}
        isTokenCheckLoading={isTokenCheckLoading}
      />
      <Switch>
        <ProtectedRoute exact path='/movies' loggedIn={loggedIn}>
          <Movies
            savedMoviesArray={savedMoviesArray}
            handleGetAllSavedMovies={handleGetAllSavedMovies}
            handleChangeMovieSavingStatus={handleChangeMovieSavingStatus}
            handleChangeIsLoading={setIsLoading}
            isLoading={isLoading}
            handleBadTokenLogOut={handleBadTokenLogOut}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
          <SavedMovies
            savedMoviesArray={savedMoviesArray}
            savedMoviesAfterFilter={savedMoviesAfterFilter}
            handleGetSavedMovies={handleGetSavedMovies}
            handleChangeMovieSavingStatus={handleChangeMovieSavingStatus}
            handleChangeIsDataRecieved={handleChangeIsDataRecieved}
            isDataRecieved={isDataRecieved} handleChangeIsLoading={setIsLoading}
            isLoading={isLoading}
            handleBadTokenLogOut={handleBadTokenLogOut}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
          <Profile
            handleUpdateUserInfo={handleUpdateUserInfo}
            handleLogOut={handleLogOut} />
        </ProtectedRoute>
        <Route path="/signin">
          {loggedIn && <Redirect to="/movies" />}
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          {loggedIn && <Redirect to="/movies" />}
          <Register handleRegister={handleRegister} />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
      <Popup
        onClose={handleCloseButtonClick}
        isOpened={isPopupOpened}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;