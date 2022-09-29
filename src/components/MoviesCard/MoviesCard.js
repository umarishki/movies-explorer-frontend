import saveIcon from '../../images/save-icon.svg';
import saveIconActive from '../../images/save-icon-activated.svg';
import deleteIcon from '../../images/delete-icon.svg';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, handleChangeMovieSavingStatus, savedMoviesArray }) {
    const location = useLocation();
    const isUserPage = location.pathname === "/saved-movies";
    const isSaved = savedMoviesArray.some(m => m.movieId === movie.id);

    const getDuration = () => {
        if (movie.duration % 60 === 0) {
            return (movie.duration / 60 + "ч");
        } else {
            return ((movie.duration - (movie.duration % 60)) / 60 + "ч " + (movie.duration % 60) + "м");
        }
    };

    const onChangeMovieSavingStatus = (e) => {
        e.stopPropagation();
        e.preventDefault();
        handleChangeMovieSavingStatus(movie, isSaved);
    };

    return (
        <li className="movies-card">
            <a className="movies-card__link-container" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <div className="movies-card__header">
                    <h3 className="movies-card__title">{movie.nameRU}</h3>
                    <button type="button" onClick={onChangeMovieSavingStatus} className={isUserPage ? "movies-card__save-button" : (isSaved ? "movies-card__save-button movies-card__save-button_activated" : "movies-card__save-button")}>
                        <img className="movies-card__save-button-icon" src={isUserPage ? deleteIcon : (isSaved ? saveIconActive : saveIcon)} alt="Иконка кнопки" />
                    </button>
                    <p className="movies-card__time">{getDuration()}</p>
                </div>
                <img className="movies-card__image" src={"https://api.nomoreparties.co/" + movie.image.url} alt="Фото: постер фильма" />
            </a>
        </li>
    );
};

export default MoviesCard;