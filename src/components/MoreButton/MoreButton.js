import './MoreButton.css';

function MoreButton({ moviesArray }) {
    return (
        <div className="more-button__container">
            { moviesArray.length >= 12 && (<button className="more-button__button">Еще</button>) }
        </div>
    );
}

export default MoreButton;