import './FormInputError.css';

function FormInputError({ errorText }) {

    return (
        <span className="input-error">{ errorText }</span>
    );
}

export default FormInputError;