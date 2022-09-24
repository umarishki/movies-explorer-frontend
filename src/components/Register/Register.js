import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';

function Register() {

    return (
        <div className="register">
            <PageWithForm title={"Добро пожаловать!"} buttonTitle={"Зарегистрироваться"} text={"Уже зарегистрированы?"} link={"/signin"} textLink={"Войти"}>
                <div className="register__container">
                    <div className="register__fields-container">
                        <p className="register__subtitle">Имя</p>
                        <input className="register__input" placeholder="Введите имя" />
                    </div>
                    <div className="register__fields-container">
                        <p className="register__subtitle">E-mail</p>
                        <input className="register__input" placeholder="Введите E-mail" />
                    </div>
                    <div className="register__fields-container">
                        <p className="register__subtitle">Пароль</p>
                        <input className="register__input" placeholder="Введите пароль" />
                    </div>
                </div>
            </PageWithForm>
        </div>
    );
}

export default Register;