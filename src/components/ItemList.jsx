import React from 'react'
import { Link } from 'react-router-dom';
import SiteItem from './SiteItem'

function ItemList({ items }) {

  return (
    <div className="List">
      <h1>Item list</h1>
      <Link to='/new-item'>
        <button>New Item</button>
      </Link>
      <div>
        {
          items !== false ? items.map(x => (<SiteItem value={x} />)) : <span className="info">No items inputed</span>
        }
      </div>
    </div>
  )
}

export default ItemList;