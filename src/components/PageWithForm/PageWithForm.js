import Logo from '../Logo/Logo';
import FormTitle from '../FormTitle/FormTitle';
import './PageWithForm.css';
import { Switch, Route } from 'react-router-dom';
import FormButton from '../FormButton/FormButton';
import ButtonNote from '../ButtonNote/ButtonNote';

function PageWithForm({ name, title, buttonTitle, text, link, textLink, handleSubmit, isValid, children }) {
    return (
        <>
            <Switch>
                <Route exact path="/profile">
                    <form className="form form_centered" name={ name } onSubmit={handleSubmit}>
                    <FormTitle title={title} />
                        {children}
                    </form>
                </Route>
                <Route exact path="/*">
                    <form className="form" name={ name } onSubmit={handleSubmit}>
                    <Logo />
                    <FormTitle title={title} />
                        {children}
                        <FormButton title={buttonTitle} isValid={isValid} />
                    </form>
                    <ButtonNote text={text} link={link} textLink={textLink} />
                </Route>
            </Switch>
        </>
    );
}

export default PageWithForm;