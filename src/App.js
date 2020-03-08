import React from "react";

const Login = function(args) {
  console.log("args>>" + args);
  return (
    <div className="container ">
      <h1>Login</h1>
      <form className="form-group">
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            className="form-control"
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
          ></input>
        </div>
        <div>
          <input type="checkbox" id="rememberMe"></input>
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div>
          <input
            type="submit"
            name="submit"
            className="btn btn-default"
          ></input>
        </div>
        <div></div>
      </form>
    </div>
  );
};
export default Login;
