import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {

  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const currentUser = {
    name: "Виталий",
    email: "pochta@yandex.ru",
  }

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

  const handleBurgerMenuClick = () => {
    isPopupOpened ? setIsPopupOpened(false) : setIsPopupOpened(true);
  }

  const handleCloseButtonClick = () => {
    setIsPopupOpened(false);
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
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile currentUser={ currentUser }/>
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
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