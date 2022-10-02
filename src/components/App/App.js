import { Route, Switch, useHistory } from 'react-router-dom';
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

function App() {

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [savedMoviesArray, setSavedMoviesArray] = useState(JSON.parse(localStorage.getItem("savedMovies")));
  const [isDataRecieved, setIsDataRecieved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const history = useHistory();

  const navigationListForMainPage = [
    {
      content: 'Регистрация',
      to: '/signup',
      linkClass: ''
    },
    {
      content: 'Войти',
      to: '/signin',
      linkClass: 'navigation__link_type_button'
    }
  ];

  const navigationListForInnerMenu = [
    {
      content: 'Фильмы',
      to: '/movies',
      linkClass: 'navigation__link_type_inner-page',
      activeLinkClass: 'navigation__link_type_active-inner-page'
    },
    {
      content: 'Сохранённые фильмы',
      to: '/saved-movies',
      linkClass: 'navigation__link_type_inner-page',
      activeLinkClass: 'navigation__link_type_active-inner-page'
    },
  ];

  const navigationListForInnerBurgerMenu = [
    {
      content: 'Главная',
      to: '/',
      linkClass: 'navigation__link_type_burger-menu',
      activeLinkClass: 'navigation__link_type_active-burger-menu'
    },
    {
      content: 'Фильмы',
      to: '/movies',
      linkClass: 'navigation__link_type_burger-menu',
      activeLinkClass: 'navigation__link_type_active-burger-menu'
    },
    {
      content: 'Сохранённые фильмы',
      to: '/saved-movies',
      linkClass: 'navigation__link_type_burger-menu',
      activeLinkClass: 'navigation__link_type_active-burger-menu'
    },
  ];

  useEffect(() => {
    tokenCheck();
  }, []);

  //   useEffect(() => {
  //     if (loggedIn) {
  //         history.push("/");
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loggedIn]);

  const handleChangeIsDataRecieved = (isDataRecieved) => {
    setIsDataRecieved(isDataRecieved);
  };

  const handleBurgerMenuClick = () => {
    isPopupOpened ? setIsPopupOpened(false) : setIsPopupOpened(true);
  }

  const handleCloseButtonClick = () => {
    setIsPopupOpened(false);
  }

  const handleGetSavedMovies = () => {
    return mainApi.getSavedMovies().then((savedMovies) => {
      if (!savedMovies) {
        throw new Error('Сохраненные файлы не найдены');
      }
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      setSavedMoviesArray(savedMovies);
      setIsDataRecieved(true);
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
      handleGetSavedMovies().catch((err) => {
        console.log(err);
      });;
    }).catch((err) => {
      handleBadTokenLogOut();
      console.log(err);
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
      handleGetSavedMovies().catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      handleBadTokenLogOut();
      console.log(err);
    });
  };

  const handleUpdateUserInfo = ({ email, name }) => {
    return mainApi.patchProfileInfo({ email, name }).then((user) => {
      if (!user) {
        throw new Error('Пользователь не найден');
      }
      setUserData(user);
      console.log(user);
    });
  };

  const handleRegister = ({ email, password, name }) => {
    return mainApi.postUser({ email: email, password: password, name: name }).then((user) => {
      handleLogin({ email, password }).catch((err) => {
        console.log(err);
      });
    });
  };

  const handleLogin = ({ email, password }) => {
    return mainApi.postUserAuth({ email: email, password: password }).then((res) => {
      if (res) {
        console.log(res);
        localStorage.setItem('token', res.data);
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
            setUserData(userData);
          }
        })
        .catch((err) => {
          handleBadTokenLogOut();
          console.log(err);
        });
    };
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setUserData(null);
    history.push('/signin');
}

  const handleBadTokenLogOut = (err) => {
    if (err.status === 401) {
        handleLogOut();
    }
}

  return (
    <>
      <Header
        onBurgerMenuClick={handleBurgerMenuClick}
        navigationListForInnerMenu={navigationListForInnerMenu}
        navigationListForMainPage={navigationListForMainPage}
      />
      <Switch>
        <Route exact path='/movies' >
          <Movies savedMoviesArray={savedMoviesArray} handleGetSavedMovies={handleGetSavedMovies} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} handleChangeIsLoading={setIsLoading} isLoading={isLoading} handleBadTokenLogOut={handleBadTokenLogOut} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies savedMoviesArray={savedMoviesArray} handleGetSavedMovies={handleGetSavedMovies} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} handleChangeIsDataRecieved={handleChangeIsDataRecieved} isDataRecieved={isDataRecieved} handleChangeIsLoading={setIsLoading} isLoading={isLoading} handleBadTokenLogOut={handleBadTokenLogOut} />
        </Route>
        <Route exact path="/profile">
          <Profile currentUser={userData} handleUpdateUserInfo={handleUpdateUserInfo} />
        </Route>
        <Route path="/signin">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
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
        navigationList={navigationListForInnerBurgerMenu}
        onClose={handleCloseButtonClick}
        isOpened={isPopupOpened}
      />
      {/* {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />} */}
    </>
  );
}

export default App;