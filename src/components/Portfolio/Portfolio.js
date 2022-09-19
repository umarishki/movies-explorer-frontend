import arrowLink from '../../images/arrow-link.svg';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h5 className="portfolio__title">Портфолио</h5>
            <ul className="portfolio__site-links">
                <li className="list-item">
                    <a href="https://github.com/umarishki" rel="noopener noreferrer" className="portfolio__site-link">
                        <p className="portfolio__site-text">Статичный сайт</p>
                        <img className="portfolio__arrow-link" src={arrowLink} alt="Иконка: стрелка" /></a>
                </li>
                <li className="list-item">
                    <a href="https://github.com/umarishki" rel="noopener noreferrer" className="portfolio__site-link">
                        <p className="portfolio__site-text">Адаптивный сайт</p>
                        <img className="portfolio__arrow-link" src={arrowLink} alt="Иконка: стрелка" /></a>
                </li>
                <li className="list-item">
                    <a href="https://github.com/umarishki" rel="noopener noreferrer" className="portfolio__site-link">
                        <p className="portfolio__site-text">Одностраничное приложение</p>
                        <img className="portfolio__arrow-link" src={arrowLink} alt="Иконка: стрелка" /></a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;