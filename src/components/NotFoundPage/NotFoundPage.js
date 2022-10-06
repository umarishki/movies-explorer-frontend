import './NotFoundPage.css';
import { useHistory } from 'react-router-dom';

function NotFoundPage() {
    const history = useHistory();
    return (
        <div className="notfound-page">
            <h2 className="notfound-page__title">404</h2>
            <p className="notfound-page__text">Страница не найдена</p>
            <button className="notfound-page__button" type="button" onClick={() => history.goBack()}>Назад</button>
        </div>
    );
};

export default NotFoundPage;