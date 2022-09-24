import { useEffect, useState } from 'react';
import './Profile.css';
import PageWithForm from '../PageWithForm/PageWithForm';
import FormButton from '../FormButton/FormButton';

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
        console.log(isEditProcess);
    }

    return (
        <div className="profile">
            <PageWithForm title={"Привет, " + currentUser.name} buttonTitle={"Сохранить"}>
                {isEditProcess ? (
                    <div className="profile__container">
                        <div className="profile__fields-container">
                            <p className="profile__subtitle">Имя</p>
                            <input className="profile__input" type="text" name="name" placeholder="Введите имя" onChange={handleSetName} value={name || ''} required />
                        </div>
                        <div className="profile__fields-container">
                            <p className="profile__subtitle">E-mail</p>
                            <input className="profile__input" type="email" name="email" placeholder="Введите E-mail" onChange={handleSetEmail} value={email || ''} required />
                        </div>
                        <FormButton title={"Сохранить"}/>
                    </div>
                ) :
                    (
                        <div className="profile__container">
                            <div className="profile__fields-container">
                                <p className="profile__subtitle">Имя</p>
                                <span className="profile__field">{currentUser.name}</span>
                            </div>
                            <div className="profile__fields-container">
                                <p className="profile__subtitle">E-mail</p>
                                <span className="profile__field">{currentUser.email}</span>
                            </div>
                            <ul className="profile__menu">
                                <li className="profile__list-item">
                                    <button className="profile__link-button" onClick={handleEditButtonClick}>Редактировать</button>
                                </li>
                                <li className="profile__list-item">
                                    <button className="profile__link-button">Выйти из аккаунта</button>
                                </li>
                            </ul>
                        </div>
                    )}
            </PageWithForm>
        </div>
    );
};

export default Profile;