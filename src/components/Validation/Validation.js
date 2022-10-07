import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { regexUserName } from '../../utils/utils';
import isEmail from 'validator/es/lib/isEmail';

const Validation = (currentUser) => {

    const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
    const [errorMessages, setErrorMessages] = useState({ name: '', email: '', password: '' });
    const [isValid, setIsValid] = useState(false);

    const checkNameValidation = (e, value) => {
        if (value.length === 0) {
            setErrorMessages({
                ...errorMessages,
                'name': 'Имя должно быть введено обязательно'
            });
            setIsValid(false);
        } else if (value.length < 2) {
            setErrorMessages({
                ...errorMessages,
                'name': 'Имя должно состоять хотя бы из 2 символов'
            });
            setIsValid(false);
        } else if (value.length > 30) {
            setErrorMessages({
                ...errorMessages,
                'name': 'Имя не может состоять больше, чем из 30 символов'
            });
            setIsValid(false);
        } else if (regexUserName.test(value)) {
            setErrorMessages({
                ...errorMessages,
                'name': 'Имя может содержать только латинские буквы, кириллицу, дефис и пробел'
            });
            setIsValid(false);
        } else {
            setErrorMessages({
                ...errorMessages,
                'name': ''
            });
            setIsValid(e.target.closest('form').checkValidity());
        };
    };

    const checkEmailValidation = (e, value) => {
        if (value.length === 0) {
            setErrorMessages({
                ...errorMessages,
                'email': 'Электронная почта должна быть введена обязательно'
            });
            setIsValid(false);
        } else if (!isEmail(value)) {
            setErrorMessages({
                ...errorMessages,
                'email': 'Введенное значение не соответствует формату электронной почты'
            });
            setIsValid(false);
        } else {
            setErrorMessages({
                ...errorMessages,
                'email': ''
            });
            setIsValid(e.target.closest('form').checkValidity());
        };
    };

    const checkPasswordValidation = (e, value) => {
        if (value.length === 0) {
            setErrorMessages({
                ...errorMessages,
                'password': 'Пароль должен быть введен обязательно'
            });
            setIsValid(false);
        } else if (value.length < 6) {
            setErrorMessages({
                ...errorMessages,
                'password': 'Пароль должен состоять хотя бы из 6 символов'
            });
            setIsValid(false);
        } else {
            setErrorMessages({
                ...errorMessages,
                'password': ''
            });
            setIsValid(e.target.closest('form').checkValidity());
        };
    };

    const checkValueValidation = (e, inputName, value) => {
        if (inputName === 'name') {
            checkNameValidation(e, value);
        } else if (inputName === 'email') {
            checkEmailValidation(e, value);
        } else if (inputName === 'password') {
            checkPasswordValidation(e, value);
        };
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues({ ...formValues, [name]: value });

        checkValueValidation(e, name, value);
    }

    useEffect(() => {
        if(currentUser) {
            if(isValid && (formValues.name === currentUser.name && formValues.email === currentUser.email)) {
                setIsValid(false);
            }
        }
    },[formValues])

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setFormValues(newValues);
        setErrorMessages(newErrors);
        setIsValid(newIsValid);
    },
        [setFormValues, setErrorMessages, setIsValid]
    );

    return {
        formValues,
        errorMessages,
        setFormValues,
        handleChange,
        isValid,
        resetForm,
        setIsValid,
    };
}

export default Validation;