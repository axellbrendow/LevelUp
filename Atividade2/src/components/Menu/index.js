import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

function Menu({menu}) {
  return (
    <section className="hero outer is-fullheight animated slideInLeft {'is-hidden': !menu.opened}">
      <div className="hero-body outer">
        <div className="container">

          <section className="hero inner is-danger is-bold animated fadeIn">
            <div className="hero-body inner">
              <div className="container">
                <img src="../../assets/avatar.png" />
              </div>
            </div>
          </section>

          <br />

          <ul>
            {
              menu.options.map((option) =>
                <Link to={option.route} className="columns is-mobile">
                  <div className="column has-text-right is-one-quarter">
                    <i className="{option.icon}"/>
                  </div>
                  <div className="column">
                    <strong> {option.text} </strong>
                  </div>
                </Link>
              )
            }
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Menu;
