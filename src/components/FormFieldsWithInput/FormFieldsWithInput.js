import FormInputError from '../FormInputError/FormInputError';
import './FormFieldsWithInput.css';

function FormFieldsWithInput({ subtitle, placeholder, name, type, value, handleChange, errorText, minLength, maxLength, pattern }) {
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
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}
                required
            />
            <FormInputError errorText={errorText} />
        </div>
    );
}

export default FormFieldsWithInput;