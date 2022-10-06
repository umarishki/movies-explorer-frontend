import { useEffect, useState } from 'react';
import './Profile.css';
import PageWithForm from '../PageWithForm/PageWithForm';
import FormButton from '../FormButton/FormButton';
import FormError from '../FormError/FormError';
import FormFieldsForProfile from '../FormFieldsForProfile/FormFieldsForProfile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import Validation from '../Validation/Validation';

function Profile({ handleUpdateUserInfo, handleLogOut }) {

    const currentUser = useContext(CurrentUserContext);

    const [isEditProcess, setIsEditProcess] = useState(false);
    const [formError, setFormError] = useState('');

    const {
        formValues,
        setFormValues,
        handleChange,
        isValid,
        resetForm,
    } = Validation();


    useEffect(() => {
        setFormValues({ name: currentUser.name, email: currentUser.email });
    }, [currentUser]);

    const handleEditButtonClick = () => {
        setIsEditProcess(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleUpdateUserInfo(formValues).catch((err) => {
            setFormError(err.message);
        });
        setIsEditProcess(false);
    }

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    return (
        <div className="profile">
            <PageWithForm name={"profile-form"} title={"Привет, " + currentUser.name} buttonTitle={"Сохранить"} handleSubmit={handleSubmit} isValid={null}>
                <div className="profile__container">
                    {isEditProcess ? (
                        <>
                            <div className="profile__fields__content">
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"Имя"} placeholder={"Введите имя"} name={"name"} type={"text"} handleSetValue={handleChange} value={formValues.name || ''}/>
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"E-mail"} placeholder={"Введите E-mail"} name={"email"} type={"email"} handleSetValue={handleChange} value={formValues.email || ''} />
                                <FormError errorText={formError} />
                            </div>
                            <FormButton title={"Сохранить"} isValid={isValid}/>
                        </>
                    ) :
                        (
                            <>
                                <div className="profile__fields__content">
                                    <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"Имя"} placeholder={null} name={"name"} type={"text"} handleSetValue={null} value={formValues.name || ''} />
                                    <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"E-mail"} placeholder={null} name={"email"} type={"email"} handleSetValue={null} value={formValues.email || ''} />
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