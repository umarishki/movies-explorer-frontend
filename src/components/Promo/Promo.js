import './Promo.css';
import promoImage from '../../images/promoImage.svg';

function Promo() {
    return (
        <section className="promo">
            <img className="promo__image" src={promoImage} alt="Изображение: промо" />
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    );
}

export default Promo;