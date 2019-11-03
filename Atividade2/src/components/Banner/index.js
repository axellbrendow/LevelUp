import React from 'react';
import logo from '../../logo.svg';
import controle_sda17 from '../../assets/sda-control.svg';
import './index.css';

function Banner() {
  return (
    <section className="hero is-dark is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column has-text-right">
              <img src={controle_sda17} alt="Semana do Angular"/>
            </div>
            <div className="column has-text-left">
              <h1 className="title">
                90's games
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
