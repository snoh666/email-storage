import React from 'react'

function Login() {

  const formSubmit = e => {
    e.preventDefault();

  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={formSubmit}>
        <input type="password" placeholder="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;