import './TextBlock.css';

function TextBlock({ title, paragraph, classNameForTitle, classNameForParagraph }) {
    return (
        <div className="text-block">
            <h4 className={ classNameForTitle === "" ? "text-block__title" : "text-block__title " + classNameForTitle }>{ title }</h4>
            <p className={ classNameForParagraph === "" ? "text-block__paragraph" : "text-block__paragraph " + classNameForParagraph  }>{ paragraph }</p>
        </div>
    );
}

export default TextBlock;

