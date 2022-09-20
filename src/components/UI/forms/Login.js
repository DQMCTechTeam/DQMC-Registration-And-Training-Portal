import React, { Fragment } from "react";
import classes from './Login.module.css'

const Login =()=>{

    const loginHandler=(event)=>{
        event.preventDefault();
    };
    return(
        <Fragment>
<form onSubmit={loginHandler}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1"/>

  </div>
  <div class="form-group form-check">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button> </form>

        </Fragment>

    )
};

export default Login;