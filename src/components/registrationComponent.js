import React from "react";

const RegistrationComponent = (props) => {

  const onFormSubmit = (event) => {
    event.preventDefault();

    const registerJsonRequestBody = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "email": event.target.email.value,
      "username": event.target.username.value,
      "password": event.target.password.value
    };

    props.onRegistrationSubmit(registerJsonRequestBody);
  };

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Don't have an account?</h4>
          <form onSubmit={onFormSubmit}>
            <div className="row form-group">
              <input type="text" name="firstName" placeholder="Enter your first name"/>
            </div>
            <div className="row form-group">
              <input type="text" name="lastName" placeholder="Enter your last name"/>
            </div>
            <div className="row form-group">
              <input type="text" name="email" placeholder="Enter your email address"/>
            </div>
            <div className="row form-group">
              <input type="text" name="username" placeholder="Choose a username"/>
            </div>
            <div className="row form-group">
              <input type="text" name="password" placeholder="Choose a password"/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  )

};

export default RegistrationComponent;
