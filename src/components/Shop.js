import React from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

export default function Shop({itemList}) {

    //------------------->TODO: Handle Category Filter onChange || Styling  <------------------
  return (
    <>
        <Header/>
        <h1>Shop</h1>
        <div>
            <div>
                <Link to='/windowshop'><button>Toggle Window Shop</button></Link>
            </div>

            <div>
                <Search/>
            </div>

            <div>
                <label for="category">Category:</label>
                <select name="category" id="category">
                    <option value="shirt">Shirt</option>
                    <option value="pants">Pants</option>
                    <option value="shoes">Shoes</option>
                    <option value="hat">Hat</option>
                    <option value="jacket">Jacket</option>
                </select>
            </div>

            <div>
                <ItemList itemList={itemList}/>
            </div>
        </div>
    </>
  )
}
