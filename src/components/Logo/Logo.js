import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Logo.css';

function Logo() {

    return (
        <Link className="logo-link" to="/">
            <img className="logo-image" src={logo} alt="Лого" />
        </Link>
    );
};

export default Logo;