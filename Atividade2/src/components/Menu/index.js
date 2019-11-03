import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import options from '../../menu_options.json'

function Menu({isVisible = false}) {
  return (
      <div className={"menu-root"}>
          {
              !isVisible ? null :
                  <section className="hero outer is-fullheight animated slideInLeft">
                      <div className="hero-body outer">
                          <div className="container">

                              <section className="hero inner is-danger is-bold animated fadeIn">
                                  <div className="hero-body inner">
                                      <div className="container">
                                          <img src="../../assets/avatar.png" alt={"Avatar"}/>
                                      </div>
                                  </div>
                              </section>
                              <br/>
                              <ul>
                                  {
                                      options.map((option) =>
                                          <Link to={option.route} key={option.icon + option.text} className="columns is-mobile">
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
          }
      </div>
  );
}

export default Menu;
