import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import poster from '../../images/poster.png';
import './SavedMovies.css';

function SavedMovies() {
    const moviesArray = [{
        id: 1,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 2,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 3,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 4,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 5,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 6,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 7,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    ];
    return (
        <div className="saved-movies">
            <MoviesCardList moviesArray={ moviesArray } isUserPage={ true }/>
            <MoreButton moviesArray={ moviesArray }/>
        </div>
    );
}

export default SavedMovies;