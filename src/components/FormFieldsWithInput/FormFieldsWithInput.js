import FormInputError from '../FormInputError/FormInputError';
import './FormFieldsWithInput.css';

function FormFieldsWithInput({ subtitle, placeholder, errorText, value, name, handleChange }) {

    return (
        <div className="form__fields-container">
            <p className="form__subtitle">{subtitle}</p>
            <input className="form__input" placeholder={placeholder} value={value || ''} onChange={handleChange} type="text" name={name}/>
            <FormInputError errorText={errorText} />
        </div>
    );
}

export default FormFieldsWithInput;