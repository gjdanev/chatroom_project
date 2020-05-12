import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import './App.css';
import RegistrationComponent from "./components/registrationComponent";
import AccountService from "./chatroom-services/accountService";
import LoginComponent from "./components/loginComponent";
import Header from "./components/common/headerComponent";
import HomeComponent from "./components/homeComponent";

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      jwt: "",
      bindings: []
    };
  }

  registerUser = (registerJsonRequestBody) => {
    AccountService.registerUser(registerJsonRequestBody).then((response) => {
      console.log("Registration complete!");
      console.log(response.data);
    });
  };

  loginUser = (loginJsonRequestBody) => {
    AccountService.loginUser(loginJsonRequestBody).then((response) => {
      console.log("Log in successful!");
      this.setState({jwt: response.data, bindings: []})
    });
    AccountService.getAllBindingKeys(this.state.jwt).then((response) => {
      this.setState((prevState) => {
        return {
          "jwt": prevState.jwt,
          "bindings": response.data
        };
      })
    });
    this.props.history.push("/home");
  };

  render () {
    return (
      <div className="App">
        <Header jwt={this.state.jwt}/>
        <Router>
          <Route path="/home">
            <HomeComponent afterLoginState={this.state}/>
          </Route>
          <Route path="/register-login">
            <div className="container mt-5">
              <div className="row">
                <RegistrationComponent onRegistrationSubmit={this.registerUser}/>
                <LoginComponent onLoginSubmit={this.loginUser}/>
              </div>
            </div>
          </Route>
          <Redirect to="/register-login"/>
        </Router>
      </div>
    )
  }
}

export default App;
