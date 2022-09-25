import FormFieldsWithInput from '../FormFieldsWithInput/FormFieldsWithInput';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Login.css';

function Login() {

    return (
        <div className="login">
            <PageWithForm title={"Рады видеть"} buttonTitle={"Войти"} text={"Ещё не зарегистрированы?"} link={"/signup"} textLink={"Регистрация"}>
                <div className="form__container">
                    <FormFieldsWithInput subtitle={"E-mail"} placeholder={"Введите E-mail"} errorText={"Что-то пошло не так, текст длинной ошибки для демонстрации поля с какой-то ошибкой"}/>
                    <FormFieldsWithInput subtitle={"Пароль"} placeholder={"Введите пароль"} errorText={"Что-то пошло не так, текст длинной ошибки для демонстрации поля с какой-то ошибкой"}/>
                </div>
            </PageWithForm>
        </div>
    );
}

export default Login;