import SectionTitle from '../SectionTitle/SectionTitle';
import TextBlock from '../TextBlock/TextBlock';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/photo.svg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <div className="about-me__content">
                <SectionTitle title="Студент" />
                <article className="about-me__information">
                    <h3 className="about-me__subtitle">Виталий</h3>
                    <img className="about-me__image" src={photo} alt="Фотография студента" />
                    <TextBlock
                        title={"Фронтенд-разработчик, 30 лет"}
                        paragraph={"Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы."}
                        classNameForTitle={"text-block__title_type_about-me"}
                        classNameForParagraph={"text-block__paragraph_type_about-me"}
                    />
                    <ul className="about-me__social-nets">
                        <li>
                            <a target="_blank" href="https://www.facebook.com/umarishki" rel="noreferrer" className="about-me__link">Facebook</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/umarishki" rel="noreferrer" className="about-me__link">Github</a>
                        </li>
                    </ul>
                </article>
                <Portfolio />
            </div>
        </section>
    );
}

export default AboutMe;