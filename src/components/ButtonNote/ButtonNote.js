import './ButtonNote.css';
import { Link } from 'react-router-dom';

function ButtonNote({ text, link, textLink }) {

    return (
        <div className="button-note">
            <p className="button-note__text">{text}</p>
            <Link className="button-note__link" to={link}>{textLink}</Link>
        </div>
    );
}

export default ButtonNote;