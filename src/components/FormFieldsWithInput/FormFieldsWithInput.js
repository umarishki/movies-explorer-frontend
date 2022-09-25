import FormErrorField from '../FormErrorField/FormErrorField';
import './FormFieldsWithInput.css';

function FormFieldsWithInput({ subtitle, placeholder, errorText }) {

    return (
        <div className="form__fields-container">
            <p className="form__subtitle">{subtitle}</p>
            <input className="form__input" placeholder={placeholder} />
            <FormErrorField errorText={errorText} />
        </div>
    );
}

export default FormFieldsWithInput;