import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header backgroundColor={ "header_background-color_blue" }/>
      <Switch>
        <Route exact path='/movies' >
          <Movies />
        </Route>
        <Route exact path="/saved-movies">

        </Route>
        <Route exact path="/profile">

        </Route>
        <Route path="/signin">
          {/* <Login /> */}
        </Route>
        <Route path="/signup">
          {/* <Register /> */}
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          {/* {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />} */}
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;