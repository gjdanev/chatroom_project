import React from "react";

const LoginComponent = (props) => {

  const onFormSubmit = (event) => {
    event.preventDefault();

    const loginJsonRequestBody = {
      "username": event.target.username.value,
      "password": event.target.password.value
    };

    props.onLoginSubmit(loginJsonRequestBody);
  };

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Already have an account?</h4>
          <form onSubmit={onFormSubmit}>
            <div className="row form-group">
              <input type="text" name="username" placeholder="Enter your username"/>
            </div>
            <div className="row form-group">
              <input type="text" name="password" placeholder="Enter your password"/>
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
          </form>
        </div>
      </div>
    </div>
  )

};

export default LoginComponent;
