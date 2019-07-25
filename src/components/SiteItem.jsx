import React from 'react'
import uuid from 'uuid/v4';

function SiteItem({ value }) {

  console.log(value)

  const { siteName, username, password } = value;

  return (
    <div className="list-item" key={uuid()}>
      <span>Site name: {siteName} </span>
      <span> Username: {username} </span>
      <span> Password: {password} </span>
    </div>
  );
}

export default SiteItem;