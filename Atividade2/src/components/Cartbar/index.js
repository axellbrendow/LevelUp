import React from 'react';
import './index.css';

function clear(cart)
{
  console.info('Esvaziando carrinho...');
  cart.products = [];
}

function Cartbar({cart}) {
  return (
      <div className="cartbar-root">
          <a className="navbar-item" onClick={() => clear(cart)}>
              <span className="tag is-danger">{ cart.products ? cart.products.length : 0 }</span>
              <i className="fa fa-shopping-cart"/>
          </a>
      </div>
  );
}

export default Cartbar;
