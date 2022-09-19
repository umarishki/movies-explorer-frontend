import FormButton from '../FormButton/FormButton';
import Logo from '../Logo/Logo';
import './Login.css';
import FormTitle from '../FormTitle/FormTitle';

function Login() {

    return (
        <div className="login">
            <Logo />
            <FormTitle title={"Рады видеть!"} />
            <div className="login__container">
                <div className="login__fields-container">
                    <p className="login__subtitle">E-mail</p>
                    <input className="login__input" placeholder="Введите E-mail" />
                </div>
                <div className="login__fields-container">
                    <p className="login__subtitle">Пароль</p>
                    <input className="login__input" placeholder="Введите пароль" />
                </div>
            </div>
            <FormButton title={"Войти"} />
        </div>
    );
}

export default Login;