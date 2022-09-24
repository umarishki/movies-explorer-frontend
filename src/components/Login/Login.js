import PageWithForm from '../PageWithForm/PageWithForm';
import "./Login.css";

function Login() {

    return (
        <div className="login">
            <PageWithForm title={"Рады видеть"} buttonTitle={"Войти"} text={"Ещё не зарегистрированы?"} link={"/signup"} textLink={"Регистрация"}>
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
            </PageWithForm>
        </div>
    );
}

export default Login;