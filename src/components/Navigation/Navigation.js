import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ navigationClass, navigationList, isExternalLink, children }) {
    return (
        <nav className={navigationClass === "" ? "navigation" : "navigation " + navigationClass}>
            {isExternalLink ?
                navigationList.map((link, i) => (
                    <Link key={i} to={link.to} className={link.linkClass === "" ? "navigation__link" : "navigation__link " + link.linkClass}>
                        {link.content}
                    </Link>
                ))
                :
                navigationList.map((link, i) => (
                    <a key={i} href={link.to} target="_blank" className={link.linkClass === "" ? "navigation__link" : "navigation__link " + link.linkClass} rel="noreferrer">
                        {link.content}
                    </a>
                ))}
            {children}
        </nav>
    );
}

export default Navigation;