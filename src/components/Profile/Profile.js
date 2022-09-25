import { useEffect, useState } from 'react';
import './Profile.css';
import PageWithForm from '../PageWithForm/PageWithForm';
import FormButton from '../FormButton/FormButton';
import FormErrorField from '../FormErrorField/FormErrorField';
import FormFieldsForProfile from '../FormFieldsForProfile/FormFieldsForProfile';

function Profile({ currentUser }) {

    const [isEditProcess, setIsEditProcess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    const handleSetName = (e) => {
        setName(e.target.value);
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {

    }

    const handleEditButtonClick = () => {
        setIsEditProcess(true);
    }

    return (
        <div className="profile">
            <PageWithForm title={"Привет, " + currentUser.name} buttonTitle={"Сохранить"}>
                <div className="profile__container">
                    {isEditProcess ? (
                        <>
                            <div className="profile__fields__content">
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"Имя"} placeholder={"Введите имя"} inputType={"text"} inputName={"name"} handleSetValue={handleSetName} currentValue={name} />
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"E-mail"} placeholder={"Введите E-mail"} inputType={"email"} inputName={"email"} handleSetValue={handleSetEmail} currentValue={email} />
                                {/* <FormErrorField errorText={"Что-то пошло не так..."} /> */}
                            </div>
                            <FormButton title={"Сохранить"} />
                        </>
                    ) :
                    (
                        <>
                            <div className="profile__fields__content">
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"Имя"} placeholder={null} inputType={null} inputName={null} handleSetValue={null} currentValue={name} />
                                <FormFieldsForProfile isEditProcess={isEditProcess} subtitle={"E-mail"} placeholder={null} inputType={null} inputName={null} handleSetValue={null} currentValue={email} />
                            </div>
                            <ul className="profile__menu">
                                <li className="profile__list-item">
                                    <button className="profile__link-button" onClick={handleEditButtonClick}>Редактировать</button>
                                </li>
                                <li className="profile__list-item">
                                    <button className="profile__link-button">Выйти из аккаунта</button>
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