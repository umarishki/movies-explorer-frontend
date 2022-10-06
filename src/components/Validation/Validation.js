import { useCallback } from 'react';
import { useState } from 'react';
import { regexUserName } from '../../utils/utils';
import isEmail from 'validator/es/lib/isEmail';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect } from 'react';

const Validation = () => {

    const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
    const [errorMessages, setErrorMessages] = useState({ name: '', email: '', password: '' });
    const [isValid, setIsValid] = useState(false);

    const currentUser = useContext(CurrentUserContext);

    const checkNameValidation = (e, value) => {
        if (value === currentUser.name) {
            setErrorMessages({
                ...errorMessages,
                'name': ''
            });
            setIsValid(false);
        } else if (value.length === 0) {
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
        if (value === currentUser.email) {
            setErrorMessages({
                ...errorMessages,
                'name': ''
            });
            setIsValid(false);
        } else if (value.length === 0) {
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


    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setFormValues(newValues);
        setErrorMessages(newErrors);
        setIsValid(newIsValid);
    },
        [setFormValues, setErrorMessages, setIsValid]
    );

    useEffect(() => {
        if (formValues.name === currentUser.name || formValues.email === currentUser.email) {
            setIsValid(false)
        }
    }, [formValues.name, formValues.email])

    return {
        formValues,
        errorMessages,
        setFormValues,
        handleChange,
        isValid,
        resetForm,
    };
}

export default Validation;