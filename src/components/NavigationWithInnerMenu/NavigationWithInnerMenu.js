import './NavigationWithInnerMenu.css';
import Navigation from '../Navigation/Navigation';
import menuBurgerIcon from '../../images/menu-burger-icon.svg';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';
import Logo from '../Logo/Logo';


function NavigationWithInnerMenu({ navigationListForInnerMenu, onBurgerMenuClick }) {

    return (
        <>
            <Logo />
            <button className="navigation__burger-button" onClick={onBurgerMenuClick}>
                <img className="navigation__burger-button-image" src={menuBurgerIcon} alt="Иконка: меню"></img>
            </button>
            <Navigation navigationClass={"navigation_type_inner-page"} navigationList={navigationListForInnerMenu}>
                <Link className="navigation__link navigation__profile-image-link navigation__link_type_inner-page" to="/profile">
                    <p className="navigation__profile-text">Аккаунт</p>
                    <img className="navigation__profile-image" src={profileIcon} alt="Иконка профиля" />
                </Link>
            </Navigation>
        </>
    );
}

export default NavigationWithInnerMenu;