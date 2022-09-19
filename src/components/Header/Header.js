import Navigation from '../Navigation/Navigation';
import { Route, Switch, Link } from 'react-router-dom';
import NavigationWithInnerMenu from '../NavigationWithInnerMenu/NavigationWithInnerMenu';
import './Header.css';
import Logo from '../Logo/Logo';

function Header({ isBackgroundColorBlue, onColorBlue, onBurgerMenuClick, navigationListForInnerMenu, navigationListForMainPage }) {

    return (
        <header className={isBackgroundColorBlue ? "header header_background-color_blue" : "header"}>
            <div className='header__content'>
                <Switch>
                    <Route exact path="/movies">
                        <NavigationWithInnerMenu
                            navigationListForInnerMenu={navigationListForInnerMenu}
                            onBurgerMenuClick={onBurgerMenuClick}
                        />
                    </Route>
                    <Route exact path="/saved-movies">
                        <NavigationWithInnerMenu
                            navigationListForInnerMenu={navigationListForInnerMenu}
                            onBurgerMenuClick={onBurgerMenuClick}
                        />
                    </Route>
                    <Route exact path="/profile">
                        <NavigationWithInnerMenu
                            navigationListForInnerMenu={navigationListForInnerMenu}
                            onBurgerMenuClick={onBurgerMenuClick}
                        />
                    </Route>
                    <Route exact path="/signin">

                    </Route>
                    <Route exact path="/signup">

                    </Route>
                    <Route exact path="/">
                        <Logo />
                        <Navigation
                            navigationClass={null}
                            navigationList={navigationListForMainPage}
                        />
                    </Route>
                </Switch>
            </div>
        </header>
    );
}

export default Header;