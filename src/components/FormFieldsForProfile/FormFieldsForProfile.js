import './FormFieldsForProfile.css';

function FormFieldsForProfile({isEditProcess, subtitle, placeholder, inputType, inputName, handleSetValue, currentValue }) {

    return (
        <div className="profile__fields-container">
            <p className="profile__subtitle">{subtitle}</p>
            {isEditProcess ?
                (
                    <input className="profile__input" type={inputType} name={inputName} placeholder={placeholder} onChange={handleSetValue} value={currentValue || ''} required autoComplete="off"/>
                )
                :
                (
                    <span className="profile__field">{currentValue}</span>
                )}
        </div>
    );
};

export default FormFieldsForProfile;