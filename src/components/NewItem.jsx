import React, { useState } from 'react'
import uuid from 'uuid/v4';

function NewItem({ history, dispatch }) {

  let [siteName, setSiteName] = useState('');
  let [nickname, setNickname] = useState('');
  let [password, setPassword] = useState('');
  let [info, setInfo] = useState('');

  const updateSiteName = e => {
    setSiteName(e.target.value);
  }

  const updateNickname = e => {
    setNickname(e.target.value);
  }

  const updatePassword = e => {
    setPassword(e.target.value);
  }

  const goBack = () => {
    history.push('/list');
  }

  const submitNewItemForm = e => {
    e.preventDefault();

    if(siteName.length <= 3) {
      setInfo('Site name has to be longer than 3 letters');
    } else if(nickname.length <= 3) {
      setInfo('Nickname has to be longer than 3 letters');
    } else if(password.length <= 3) {
      setInfo('Password has to be longer than 3 letters');
    } else if (siteName.length >= 3 && nickname.length >= 3 && password.length >= 3) {
      setInfo('');
      dispatch({type: 'ADD_ITEM', body: {
        id: uuid(),
        siteName: siteName,
        username: nickname,
        password: password
      }});
      history.push('/list');
    }
  }

  return (
    <div className="NewItem">
      <h1>New Item</h1>
      <form onSubmit={submitNewItemForm} className="new-item-form">
        <input type="text" name="new-item-site-name" placeholder="Site name" value={siteName} onChange={updateSiteName} />
        <input type="text" name="new-item-username" placeholder="Nickname" value={nickname} onChange={updateNickname} />
        <input type="password" name="new-item-password" placeholder="Password" value={password} onChange={updatePassword} />
        <div className="buttons-box">
          <button onClick={goBack} >Go Back</button>
          <button type="submit">Add Item</button>
        </div>
      </form>
      <div className="info">
        {info}
      </div>
    </div>
  );
}

export default NewItem;