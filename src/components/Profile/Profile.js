import { useEffect, useState } from 'react';
import './Profile.css';
import PageWithForm from '../PageWithForm/PageWithForm';
import FormButton from '../FormButton/FormButton';
import FormMessage from '../FormMessage/FormMessage';
import FormError from '../FormError/FormError';
import FormFieldsForProfile from '../FormFieldsForProfile/FormFieldsForProfile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import Validation from '../Validation/Validation';

function Profile({ handleUpdateUserInfo, handleLogOut }) {

    const currentUser = useContext(CurrentUserContext);

    const [isEditProcess, setIsEditProcess] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [formError, setFormError] = useState('');

    const {
        formValues,
        setFormValues,
        handleChange,
        isValid,
        resetForm,
        setIsValid
    } = Validation(currentUser);

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    useEffect(() => {
        if (!isEditProcess) {
            setFormValues({ name: currentUser.name, email: currentUser.email });
        };
    }, []);

    useEffect(() => {
        if (currentUser) {
            if (formValues.name === currentUser.name || formValues.email === currentUser.email) {
                setIsValid(false);
            }
        }
    }, [formValues.name, formValues.email, isEditProcess])

    const handleEditButtonClick = () => {
        setIsEditProcess(true);
    }

    const handleSubmit = (e) => {
        setFormMessage('');
        setFormError('');
        e.preventDefault();

        handleUpdateUserInfo(formValues).catch((err) => {
            setFormError(err.message);
            return;
        });
        setIsEditProcess(false);
        setFormMessage("Новые данные успешно сохранены");
    }

    return (
        <div className="profile">
            <PageWithForm
                name={"profile-form"}
                title={"Привет, " + currentUser.name}
                buttonTitle={"Сохранить"}
                handleSubmit={handleSubmit}
                isValid={null}
            >
                <div className="profile__container">
                    {isEditProcess ? (
                        <>
                            <div className="profile__fields__content">
                                <FormFieldsForProfile
                                    isEditProcess={isEditProcess}
                                    subtitle={"Имя"}
                                    placeholder={"Введите имя"}
                                    name={"name"}
                                    type={"text"}
                                    handleSetValue={handleChange}
                                    value={formValues.name || ''}
                                    minLength={2}
                                    maxLength={30}
                                    pattern={"^[а-яА-ЯёЁa-zA-Z -]+"}
                                />
                                <FormFieldsForProfile
                                    isEditProcess={isEditProcess}
                                    subtitle={"E-mail"}
                                    placeholder={"Введите E-mail"}
                                    name={"email"}
                                    type={"email"}
                                    handleSetValue={handleChange}
                                    value={formValues.email || ''}
                                    minLength={null}
                                    maxLength={null}
                                    pattern={null}
                                />
                                <FormError errorText={formError} />
                            </div>
                            <FormButton title={"Сохранить"} isValid={isValid} />
                        </>
                    ) :
                        (
                            <>
                                <div className="profile__fields__content">
                                    <FormFieldsForProfile
                                        isEditProcess={isEditProcess}
                                        subtitle={"Имя"}
                                        placeholder={null}
                                        name={"name"}
                                        type={"text"}
                                        handleSetValue={null}
                                        value={formValues.name || ''}
                                        minLength={2}
                                        maxLength={30}
                                        pattern={"^[а-яА-ЯёЁa-zA-Z -]+"}
                                    />
                                    <FormFieldsForProfile
                                        isEditProcess={isEditProcess}
                                        subtitle={"E-mail"}
                                        placeholder={null}
                                        name={"email"}
                                        type={"email"}
                                        handleSetValue={null}
                                        value={formValues.email || ''}
                                        minLength={null}
                                        maxLength={null}
                                        pattern={null}
                                    />
                                    <FormMessage text={formMessage} />
                                </div>
                                <ul className="profile__menu">
                                    <li className="profile__list-item">
                                        <button className="profile__link-button" type="button" onClick={handleEditButtonClick}>Редактировать</button>
                                    </li>
                                    <li className="profile__list-item">
                                        <button className="profile__link-button" type="button" onClick={handleLogOut}>Выйти из аккаунта</button>
                                    </li>
                                </ul>
                            </>
                        )}
                </div>
            </PageWithForm>
        </div>
    );
};

export default Profile;