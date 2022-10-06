import FormInputError from '../FormInputError/FormInputError';
import './FormFieldsWithInput.css';

function FormFieldsWithInput({ subtitle, placeholder, name, type, value, handleChange, errorText }) {
    return (
        <div className="form__fields-container">
            <p className="form__subtitle">{subtitle}</p>
            <input
                className="form__input"
                placeholder={placeholder}
                value={value || ''}
                onChange={handleChange}
                type={type}
                name={name}
                required
            />
            <FormInputError errorText={errorText} />
        </div>
    );
}

export default FormFieldsWithInput;