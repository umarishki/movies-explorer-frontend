import './FormErrorField.css';

function FormErrorField({ errorText }) {

    return (
        <span className="error-field">{ errorText }</span>
    );
}

export default FormErrorField;