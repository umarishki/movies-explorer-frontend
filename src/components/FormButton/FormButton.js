import './FormButton.css';

function FormButton({ title }) {

    return (
        <button className="form-button" type="submit">{ title }</button>
    );
};

export default FormButton;