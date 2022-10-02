import './FormError.css';

function FormError({ errorText }) {

    return (
        <span className={errorText !== '' ? "form-error form-error_visible" : "form-error"}>{ errorText }</span>
    );
}

export default FormError;