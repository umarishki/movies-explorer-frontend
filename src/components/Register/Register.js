import FormFieldsWithInput from '../FormFieldsWithInput/FormFieldsWithInput';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';
import FormError from '../FormError/FormError';
import Validation from '../Validation/Validation';
import { useEffect, useState } from 'react';

function Register({ handleRegister }) {

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

        handleRegister(formValues).catch((err) => {
            setFormError(err.message);
        });
    };

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    return (
        <div className="register">
            <PageWithForm name={"register-form"} title={"Добро пожаловать!"} buttonTitle={"Зарегистрироваться"} text={"Уже зарегистрированы?"} link={"/signin"} textLink={"Войти"} handleSubmit={handleSubmit} isValid={isValid}>
                <fieldset className="form__container">
                    <FormFieldsWithInput subtitle={"Имя"} placeholder={"Введите имя"} name={"name"} type={"text"} value={formValues.name || ''} handleChange={handleChange} errorText={errorMessages.name} />
                    <FormFieldsWithInput subtitle={"E-mail"} placeholder={"Введите E-mail"} name={"email"} type={"email"} value={formValues.email || ''} handleChange={handleChange} errorText={errorMessages.email} />
                    <FormFieldsWithInput subtitle={"Пароль"} placeholder={"Введите пароль"} name={"password"} type={"password"} value={formValues.password || ''} handleChange={handleChange} errorText={errorMessages.password} />
                    <FormError errorText={formError} />
                </fieldset>
            </PageWithForm>
        </div>
    );
}

export default Register;