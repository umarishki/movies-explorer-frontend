import Navigation from '../Navigation/Navigation';
import './Footer.css';

function Footer() {
    const navigationList = [{
        name: 'Яндекс.Практикум',
        to: '/sign-up',
        linkClass: 'navigation__link_type_footer'
    },
    {
        name: 'Github',
        to: '/sign-in',
        linkClass: 'navigation__link_type_footer'
    },
    {
        name: 'Facebook',
        to: '/sign-in',
        linkClass: 'navigation__link_type_footer'
    }];

    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__container">
                    <p className="footer__copyright">&copy;2020</p>
                    <Navigation navigationClass={ "navigation_type_column" } navigationList={ navigationList }/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;