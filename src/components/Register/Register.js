import FormFieldsWithInput from '../FormFieldsWithInput/FormFieldsWithInput';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';
import { useState } from 'react';
import FormError from '../FormError/FormError';

function Register({ handleRegister }) {

    const [formValues, setFormValues] = useState({ email: '', name: '', password: '' });
    const [errorText, setErrorText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, email, name } = formValues;
        if (!password || !email || !name){
            return;
        }
        handleRegister(formValues).catch((err) => {
            setErrorText(err);
            console.log(err);
        });;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className="register">
            <PageWithForm title={"Добро пожаловать!"} buttonTitle={"Зарегистрироваться"} text={"Уже зарегистрированы?"} link={"/signin"} textLink={"Войти"} handleSubmit={handleSubmit}>
                <div className="form__container">
                    <FormFieldsWithInput subtitle={"Имя"} placeholder={"Введите имя"} name="name" value={formValues.name} handleChange={handleChange} errorText={" "}/>
                    <FormFieldsWithInput subtitle={"E-mail"} placeholder={"Введите E-mail"} name="email" value={formValues.email} handleChange={handleChange} errorText={" "}/>
                    <FormFieldsWithInput subtitle={"Пароль"} placeholder={"Введите пароль"} name="password" value={formValues.password} handleChange={handleChange} errorText={" "}/>
                    <FormError errorText="ejhrwjkhrwkjhrkwejrhkw" />
                </div>
            </PageWithForm>
        </div>
    );
}

export default Register;