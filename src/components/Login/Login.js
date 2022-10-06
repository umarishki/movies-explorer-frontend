import { useEffect, useState } from 'react';
import FormError from '../FormError/FormError';
import FormFieldsWithInput from '../FormFieldsWithInput/FormFieldsWithInput';
import PageWithForm from '../PageWithForm/PageWithForm';
import Validation from '../Validation/Validation';
import './Login.css';

function Login({ handleLogin }) {

    const [formError, setFormError] = useState('');

    const {
        formValues,
        errorMessages,
        handleChange,
        isValid,
        resetForm,
    } = Validation();

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLogin(formValues).catch((err) => {
            setFormError(err.message);
        });
    };

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    return (
        <div className="login">
            <PageWithForm name={"login-form"} title={"Рады видеть"} buttonTitle={"Войти"} text={"Ещё не зарегистрированы?"} link={"/signup"} textLink={"Регистрация"} handleSubmit={handleSubmit} isValid={isValid}>
                <fieldset className="form__container">
                    <FormFieldsWithInput subtitle={"E-mail"} placeholder={"Введите E-mail"} name={"email"} type={"email"} value={formValues.email || ''} handleChange={handleChange} errorText={errorMessages.email} />
                    <FormFieldsWithInput subtitle={"Пароль"} placeholder={"Введите пароль"} name={"password"} type={"password"} value={formValues.password || ''} handleChange={handleChange} errorText={errorMessages.password} />
                    <FormError errorText={formError} />
                </fieldset>
            </PageWithForm>
        </div>
    );
}

export default Login;