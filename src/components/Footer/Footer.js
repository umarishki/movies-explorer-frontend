import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Footer.css';

function Footer() {
    const navigationList = [{
        content: 'Яндекс.Практикум',
        to: 'https://practicum.yandex.ru',
        linkClass: 'navigation__link_type_footer'
    },
    {
        content: 'Github',
        to: 'https://github.com',
        linkClass: 'navigation__link_type_footer'
    },
    {
        content: 'Facebook',
        to: 'https://facebook.com',
        linkClass: 'navigation__link_type_footer'
    }];

    return (
        <footer className="footer">
            <div className="footer__content">
                <Switch>
                    <Route exact path="/">
                        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                        <div className="footer__container">
                            <p className="footer__copyright">&copy;2020</p>
                            <Navigation navigationClass={"navigation_type_column"} navigationList={navigationList} isExternalLink={false} />
                        </div>
                    </Route>
                    <Route exact path="/movies">
                        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                        <div className="footer__container">
                            <p className="footer__copyright">&copy;2020</p>
                            <Navigation navigationClass={"navigation_type_column"} navigationList={navigationList} isExternalLink={false} />
                        </div>
                    </Route>
                    <Route exact path="/saved-movies">
                        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                        <div className="footer__container">
                            <p className="footer__copyright">&copy;2020</p>
                            <Navigation navigationClass={"navigation_type_column"} navigationList={navigationList} isExternalLink={false} />
                        </div>
                    </Route>
                    <Route exact path="/*">
                    </Route>
                </Switch>
            </div>
        </footer>
    );
}

export default Footer;