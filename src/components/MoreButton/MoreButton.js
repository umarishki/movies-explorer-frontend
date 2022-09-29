import './MoreButton.css';

function MoreButton({ moviesArray, currentMoviesAmount, onChangeCurrentMoviesAmount, isDataRecieved }) {

    if (moviesArray.length > currentMoviesAmount && isDataRecieved) {
        return (
            <div className="more-button__container">
                <button className="more-button__button" type="button" onClick={onChangeCurrentMoviesAmount}>Еще</button>
            </div>
        );
    };
};

export default MoreButton;