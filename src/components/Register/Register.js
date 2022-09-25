import FormFieldsWithInput from '../FormFieldsWithInput/FormFieldsWithInput';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';

function Register() {

    return (
        <div className="register">
            <PageWithForm title={"Добро пожаловать!"} buttonTitle={"Зарегистрироваться"} text={"Уже зарегистрированы?"} link={"/signin"} textLink={"Войти"}>
                <div className="form__container">
                    <FormFieldsWithInput subtitle={"Имя"} placeholder={"Введите имя"} errorText={"Что-то пошло не так, текст длинной ошибки для демонстрации поля с какой-то ошибкой"}/>
                    <FormFieldsWithInput subtitle={"E-mail"} placeholder={"Введите E-mail"} errorText={"Что-то пошло не так, текст длинной ошибки для демонстрации поля с какой-то ошибкой"}/>
                    <FormFieldsWithInput subtitle={"Пароль"} placeholder={"Введите пароль"} errorText={"Что-то пошло не так"}/>
                </div>
            </PageWithForm>
        </div>
    );
}

export default Register;