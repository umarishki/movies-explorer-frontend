import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ navigationClass, navigationList, isRoute, targetType, onClose, children }) {
    return (
        <nav className={navigationClass === "" ? "navigation" : "navigation " + navigationClass}>
            {isRoute ?
                navigationList.map((link, i) => (
                    <NavLink
                        key={i}
                        exact
                        to={link.to}
                        activeClassName={link.activeLinkClass || ""}
                        className={link.linkClass === "" ? "navigation__link" : "navigation__link " + link.linkClass}
                        onClick={onClose || null}
                    >
                        {link.content}
                    </NavLink>
                ))
                :
                navigationList.map((link, i) => (
                    <a
                        key={i}
                        href={link.to}
                        target={targetType}
                        className={link.linkClass === "" ? "navigation__link" : "navigation__link " + link.linkClass}
                        rel="noreferrer"
                    >
                        {link.content}
                    </a>
                ))}
            {children}
        </nav>
    );
}

export default Navigation;