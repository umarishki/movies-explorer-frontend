import SectionTitle from '../SectionTitle/SectionTitle';
import TextBlock from '../TextBlock/TextBlock';
import Table from '../Table/Table';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project">
            <article className="about-project__content">
                <SectionTitle title={"О проекте"} />
                <div className="about-project__text-blocks">
                    <TextBlock
                        title={"Дипломный проект включал 5 этапов"}
                        paragraph={"Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."}
                        classNameForTitle={""}
                        classNameForParagraph={""}
                    />
                    <TextBlock
                        title={"На выполнение диплома ушло 5 недель"}
                        paragraph={"У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."}
                        classNameForTitle={""}
                        classNameForParagraph={""}
                    />
                </div>
                <Table />
            </article>
        </section>
    );
}

export default AboutProject;