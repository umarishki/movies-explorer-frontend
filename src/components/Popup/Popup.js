import crossIcon from '../../images/cross-icon.svg';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';
import './Popup.css';

function Popup({ navigationList, onClose, isOpened }) {

    return (
        <div className={isOpened ? "popup popup__opened" : "popup"}>
            <div className="popup__container">
                <button className="popup__close-button" onClick={onClose}>
                    <img className="popup__close-button-icon" src={crossIcon} alt="Иконка: крестик" />
                </button>
                <Navigation navigationClass={"navigation_type_burger-menu"} navigationList={navigationList} isExternalLink={true} onClose={onClose} >
                    <NavLink activeClassName="navigation__link_type_active-burger-menu" className="navigation__link navigation__profile-image-link navigation__link_type_burger-menu" to="/profile" onClick={onClose}>
                        <p className="navigation__profile-text">Аккаунт</p>
                        <img className="navigation__profile-image" src={profileIcon} alt="Иконка профиля" />
                    </NavLink>
                </Navigation>
            </div>
        </div>
    );
}

export default Popup;