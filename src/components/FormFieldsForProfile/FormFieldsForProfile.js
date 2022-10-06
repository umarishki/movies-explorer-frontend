import './FormFieldsForProfile.css';

function FormFieldsForProfile({isEditProcess, subtitle, placeholder, name, type, handleSetValue, value }) {

    return (
        <div className="profile__fields-container">
            <p className="profile__subtitle">{subtitle}</p>
            {isEditProcess ?
                (
                    <input className="profile__input" type={type} name={name} placeholder={placeholder} onChange={handleSetValue} value={value || ''} required autoComplete="off"/>
                )
                :
                (
                    <span className="profile__field">{value}</span>
                )}
        </div>
    );
};

export default FormFieldsForProfile;