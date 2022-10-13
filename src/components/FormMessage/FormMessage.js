import './FormMessage.css';

function FormMessage({ text, isSuccessfulOperation }) {

    return (
        <span className={text !== '' ? "form-message form-message_visible" : "form-message"}>{ text }</span>
    );
}

export default FormMessage;