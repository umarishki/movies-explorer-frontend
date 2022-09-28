import LabelTech from '../LabelTech/LabelTech';
import SectionTitle from '../SectionTitle/SectionTitle';
import TextBlock from '../TextBlock/TextBlock';
import './Techs.css';

function Techs() {
    return (
        <section className="techs" id="technologies">
            <article className="techs__content">
                <SectionTitle
                    title={"Технологии"}
                />
                <TextBlock
                    title={"7 технологий"}
                    paragraph={"На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте."}
                    classNameForTitle={"text-block__title_type_techs"}
                    classNameForParagraph={"text-block__paragraph_type_techs"}
                />
                <ul className="techs__labels">
                <LabelTech labelText={"HTML"}/>
                <LabelTech labelText={"CSS"}/>
                <LabelTech labelText={"JS"}/>
                <LabelTech labelText={"React"}/>
                <LabelTech labelText={"Git"}/>
                <LabelTech labelText={"Express.js"}/>
                <LabelTech labelText={"mongoDB"}/>
                </ul>
            </article>
        </section>
    );
}

export default Techs;