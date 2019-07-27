import React from 'react'

function SiteItem({ value, dispatch }) {

  const { siteName, username, password } = value;

  const deleteItem = () => {
    dispatch({ type: 'DELETE_ITEM', body: { id: value.id}});
  }

  return (
    <div className="list-item">
      <span>Site name: {siteName} </span>
      <span> Username: {username} </span>
      <span> Password: {password} </span>
      <button className="delete" onClick={deleteItem}>X</button>
    </div>
  );
}

export default SiteItem;