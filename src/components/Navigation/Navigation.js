import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ navigationClass, navigationList, children }) {
    return (
            <nav className={navigationClass === "" ? "navigation" : "navigation " + navigationClass}>
                {navigationList.map((link, i) => (
                    <Link key={i} to={link.to} className={link.linkClass === "" ? "navigation__link" : "navigation__link " + link.linkClass}>
                          {link.content}      
                    </Link>
                ))}
                {children}
            </nav>
    );
}

export default Navigation;