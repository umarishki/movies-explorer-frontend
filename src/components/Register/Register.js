import './Register.css';
import FormButton from '../FormButton/FormButton';
import Logo from '../Logo/Logo';
import FormTitle from '../FormTitle/FormTitle';

function Register() {

    return (
        <div className="register">
            <Logo />
            <FormTitle title={"Добро пожаловать!"} />
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
            <FormButton title={"Зарегистрироваться"} />
        </div>
    );
}

export default Register;