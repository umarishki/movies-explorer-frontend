import saveIcon from '../../images/save-icon.svg';
import saveIconActive from '../../images/save-icon-activated.svg';
import deleteIcon from '../../images/delete-icon.svg';
import './MoviesCard.css';

function MoviesCard({ title, time, poster, isSavedMovie, isUserPage }) {

    return (
        <li className="movies-card">
            <div className="movies-card__header">
                <h3 className="movies-card__title">{ title }</h3>
                <button className={ isUserPage ? "movies-card__save-button" : (isSavedMovie ? "movies-card__save-button movies-card__save-button_activated" : "movies-card__save-button") }>
                        <img className="movies-card__save-button-icon" src={ isUserPage ? deleteIcon : (isSavedMovie ? saveIconActive : saveIcon) } alt="Иконка кнопки" />
                </button>
                <p className="movies-card__time">{ time }</p>
            </div>
           <img className="movies-card__image" src={ poster } alt="Фото: постер фильма" />
        </li>
    );
};

export default MoviesCard;