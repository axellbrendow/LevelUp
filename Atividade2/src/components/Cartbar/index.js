import React from 'react';
import './index.css';

function clear(cart)
{
  console.info('Esvaziando carrinho...');
  cart.items = [];
}

function Cartbar({cart}) {
  return (
      <a className="navbar-item" onClick="clear(cart)">
        <span className="tag is-danger">{ cart.items ? cart.items.length : 0 }</span> /* coloca 0 caso quantity não exista */
        <i className="fa fa-shopping-cart"/>
      </a>
  );
}

export default Cartbar;
