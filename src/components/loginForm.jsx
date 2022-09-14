import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
   state = {
      data: { username: "", password: "" },
      errors: {},
   };

   validationRules = {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
   };

   schema = Joi.object(this.validationRules);

   doSubmit = () => {
      // Call to Server
      console.log("Submitted");
   };

   render() {
      return (
         <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
               {this.renderInput("username", "Username", true)}
               {this.renderInput("password", "Password")}
               {this.renderButton("Login")}
            </form>
         </div>
      );
   }
}

export default LoginForm;
