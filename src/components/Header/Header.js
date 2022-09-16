import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile-icon.svg';
import Navigation from '../Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ backgroundColor, handleLogOut }) {
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

    const navigationListForMoviesPage = [
        {
            content: 'Фильмы',
            to: '/movies',
            linkClass: 'navigation__link_type_movies-page'
        },
        {
            content: 'Сохранённые фильмы',
            to: '/saved-movies',
            linkClass: 'navigation__link_type_movies-page'
        },
        {
            content: 'Аккаунт',
            to: '/profile',
            linkClass: 'navigation__link_type_movies-page'
        },
    ];

    return (
        <header className={ "header " + backgroundColor}>
            <div className='header__content'>
                <img className="header__logo-image" src={logo} alt="Лого" />

                <Switch>
                    <Route exact path="/movies">
                        <Navigation navigationClass={"navigation_type_movies-page"} navigationList={navigationListForMoviesPage} />
                        <Link className="header__profile-image-link" to="/profile">
                            <img className="header__profile-image" src={profileIcon} alt="Иконка профиля" />
                        </Link>
                    </Route>
                    <Route exact path="/saved-movies">

                    </Route>
                    <Route exact path="/profile">

                    </Route>
                    <Route exact path="/signin">

                    </Route>
                    <Route exact path="/signup">

                    </Route>
                    <Route exact path="/">
                        <Navigation navigationClass={null} navigationList={navigationListForMainPage} />
                    </Route>
                </Switch>
            </div>
        </header>
    );
}

export default Header;