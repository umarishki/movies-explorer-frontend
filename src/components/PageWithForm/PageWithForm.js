import Logo from '../Logo/Logo';
import FormTitle from '../FormTitle/FormTitle';
import './PageWithForm.css';
import { Switch, Route } from 'react-router-dom';
import FormButton from '../FormButton/FormButton';
import ButtonNote from '../ButtonNote/ButtonNote';

function PageWithForm({ title, buttonTitle, text, link, textLink, children }) {
    return (
        <>
            <Switch>
                <Route exact path="/profile">
                    <FormTitle title={title} />
                    {children}
                </Route>
                <Route exact path="/*">
                    <Logo />
                    <FormTitle title={title} />
                    {children}
                    <FormButton title={buttonTitle} />
                    <ButtonNote text={text} link={link} textLink={textLink} />
                </Route>
            </Switch>
        </>
    );
}

export default PageWithForm;