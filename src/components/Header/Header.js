import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ email, handleLogOut }) {
    const navigationList = [{
        name: 'Регистрация',
        to: '/sign-up',
        linkClass: ''
    },
    {
        name: 'Войти',
        to: '/sign-in',
        linkClass: 'navigation__link_type_button'
    }];
    
    return (
        <header className="header">
            <div className='header__content'>
                <img className="header__image" src={logo} alt="Лого" />
                <Navigation navigationClass={ null } navigationList={ navigationList }/>
            </div>
        </header>
    );
}

export default Header;