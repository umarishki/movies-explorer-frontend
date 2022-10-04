import Navigation from '../Navigation/Navigation';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavigationWithInnerMenu from '../NavigationWithInnerMenu/NavigationWithInnerMenu';
import './Header.css';
import Logo from '../Logo/Logo';

function Header({ onBurgerMenuClick, navigationListForInnerMenu, navigationListForMainPage, loggedIn, isTokenCheckLoading }) {
    const location = useLocation();

    if (isTokenCheckLoading) {
        return <></>;
    }

    return (
        <header className={location.pathname === "/" ? "header header_background-color_blue" : "header"}>
            <div className='header__content'>
                <Switch>
                    <Route exact path="/">
                        {loggedIn ?
                            <NavigationWithInnerMenu
                                navigationListForInnerMenu={navigationListForInnerMenu}
                                onBurgerMenuClick={onBurgerMenuClick}
                            />
                            :
                            <>
                                <Logo />
                                <Navigation
                                    navigationClass={null}
                                    navigationList={navigationListForMainPage}
                                    isRoute={true}
                                    targetType={null}
                                />
                            </>
                        }
                    </Route>
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
                    <Route path="/*">
                    </Route>
                </Switch>
            </div>
        </header>
    );
}

export default Header;