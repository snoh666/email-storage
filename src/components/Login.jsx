import React, { useState, useEffect } from 'react'

function Login({ history, propPassword, dispatch }) {

  let [password, setPassword] = useState('');
  let [info, setInfo ] = useState('');

  useEffect(() => {
    if (propPassword === false) {
      setInfo('This password will be set to future use');
    }
  }, [propPassword])

  const updatePassword = e => {
    setPassword(e.target.value);
  }

  const formSubmit = e => {
    e.preventDefault();
    console.log(typeof propPassword)
    if(typeof propPassword !== 'string') {
      dispatch({ type: 'SET_PASSWORD', body: password});
      history.push('/list');
    } else {
      if (propPassword === password) {
        history.push('/list');
      } else {
        setInfo('Wrong password');
      }
    }
  };

  return (
    <div className = "Login">
      <h2>Login</h2 >
    <form className="login-form" onSubmit={formSubmit}>
      <input type="password" placeholder="Password" value={password} onChange={updatePassword} />
      <button type="submit">Login</button>
      <div className="info">
        {info}
      </div>
    </form>
    </div >
  )
}

export default Login;