import { useState } from 'react';
import FormError from '../FormError/FormError';
import FormFieldsWithInput from '../FormFieldsWithInput/FormFieldsWithInput';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Login.css';

function Login({ handleLogin }) {

    const [formValues, setFormValues] = useState({ email: '', name: '', password: '' });
    const [errorText, setErrorText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, email } = formValues;
        if (!password || !email) {
            return;
        }
        handleLogin(formValues).catch((err) => {
            setErrorText(err);
            console.log(err);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className="login">
            <PageWithForm title={"Рады видеть"} buttonTitle={"Войти"} text={"Ещё не зарегистрированы?"} link={"/signup"} textLink={"Регистрация"} handleSubmit={handleSubmit}>
                <div className="form__container">
                    <FormFieldsWithInput subtitle={"E-mail"} placeholder={"Введите E-mail"} name="email" value={formValues.email} handleChange={handleChange} errorText={" "} />
                    <FormFieldsWithInput subtitle={"Пароль"} placeholder={"Введите пароль"} name="password" value={formValues.password} handleChange={handleChange} errorText={" "} />
                    <FormError errorText={errorText} />
                </div>
            </PageWithForm>
        </div>
    );
}

export default Login;