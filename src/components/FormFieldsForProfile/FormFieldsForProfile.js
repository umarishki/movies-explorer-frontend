import './FormFieldsForProfile.css';

function FormFieldsForProfile({ isEditProcess, subtitle, placeholder, name, type, handleSetValue, value, minLength, maxLength, pattern }) {

    return (
        <div className="profile__fields-container">
            <p className="profile__subtitle">{subtitle}</p>
            {isEditProcess ?
                (
                    <input
                        className="profile__input"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={handleSetValue}
                        value={value || ''}
                        required
                        minLength={minLength}
                        maxLength={maxLength}
                        pattern={pattern}
                    />
                )
                :
                (
                    <span className="profile__field">{value}</span>
                )}
        </div>
    );
};

export default FormFieldsForProfile;