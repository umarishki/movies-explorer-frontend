import { useEffect, useState } from 'react';
import './Profile.css';
import PageWithForm from '../PageWithForm/PageWithForm';
import FormButton from '../FormButton/FormButton';
import FormError from '../FormError/FormError';
import FormFieldsForProfile from '../FormFieldsForProfile/FormFieldsForProfile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function Profile({ handleUpdateUserInfo, handleLogOut }) {

    const currentUser = useContext(CurrentUserContext);

    const [isEditProcess, setIsEditProcess] = useState(false);
    const [formValues, setFormValues] = useState({ email: '', name: '' });
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        setFormValues({ name: currentUser.name, email: currentUser.email });
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleEditButtonClick = () => {
        setIsEditProcess(true);
    }

    const handleSubmit = (e) => {
        setErrorText('');
        e.preventDefault();
        const { email, name } = formValues;
        if (!email || !name) {
            setErrorText('Обязательные поля не заполнены');
            return;
        }

        if (currentUser.email === email && currentUser.name === name) {
            setErrorText('Данные пользователя не были изменены');
            return;
        }

        handleUpdateUserInfo({ email, name }).catch((err) => {
            console.log(err);
        });
        setIsEditProcess(false);
    }

    return (
        <div className="profile">
            <PageWithForm title={"Привет, " + currentUser.name} buttonTitle={"Сохранить"} handleSubmit={handleSubmit}>
                <div className="profile__container">
                    {isEditProcess ? (
                        <>
                            <div className="profile__fields__content">
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"Имя"} placeholder={"Введите имя"} inputType={"text"} inputName={"name"} handleSetValue={handleChange} currentValue={formValues.name} />
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"E-mail"} placeholder={"Введите E-mail"} inputType={"email"} inputName={"email"} handleSetValue={handleChange} currentValue={formValues.email} />
                                <FormError errorText={errorText} />
                            </div>
                            <FormButton title={"Сохранить"} />
                        </>
                    ) :
                        (
                            <>
                                <div className="profile__fields__content">
                                    <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"Имя"} placeholder={null} inputType={null} inputName={null} handleSetValue={null} currentValue={formValues.name} />
                                    <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"E-mail"} placeholder={null} inputType={null} inputName={null} handleSetValue={null} currentValue={formValues.email} />
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