import './FormInputError.css';

function FormInputError({ errorText }) {

    return (
        <span className={errorText ? "input-error input-error_visible" : "input-error"}>{ errorText }</span>
    );
}

export default FormInputError;