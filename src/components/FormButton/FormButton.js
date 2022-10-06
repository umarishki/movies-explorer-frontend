import './FormButton.css';

function FormButton({ title, isValid }) {

    return (
        <button className="form-button" type="submit" disabled={!isValid}>{title}</button>
    );
};

export default FormButton;