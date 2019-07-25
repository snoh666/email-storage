import React from 'react'

function SiteItem({ value }) {

  console.log(value)

  const { siteName, username, password } = value;

  return (
    <div className="list-item">
      <span>Site name: {siteName} </span>
      <span> Username: {username} </span>
      <span> Password: {password} </span>
    </div>
  );
}

export default SiteItem;