import React from 'react'
import { Link } from 'react-router-dom';
import SiteItem from './SiteItem'

function ItemList({ items, dispatch }) {

  return (
    <div className="List">
      <h1>Item list</h1>
      <Link to='/new-item'>
        <button>New Item</button>
      </Link>
      <div className="list-container">
        {
          items !== false ? items.map(x => (<SiteItem key={x.id} value={x} dispatch={dispatch} />)) : <span className="info">No items inputed</span>
        }
      </div>
    </div>
  )
}

export default ItemList;