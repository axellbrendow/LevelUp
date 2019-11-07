import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

function ProductCard({className = '', product, addToCart, detailedView}) {
    return (
        <div className={"productcard-root " + className}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={require("../../assets/games/" + product.image)} alt="Product"/>
                    </figure>
                </div>

                <div className="card-content">

                    <div className="columns is-mobile">
                        <div className="column">
                            <h2 className="title is-4"><Link to={product.route}>{product.name}</Link></h2>
                        </div>
                        {
                            detailedView ? null :
                                <div className=" column is-one-third has-text-right">
                                    <span className=" tag is-warning is-medium">{"R$ " + product.price.toFixed(2)}</span>
                                </div>
                        }

                    </div>
                    {
                        !detailedView ? null :
                            <div className=" content">
                                <small className=" year">Ano: {product.year}</small>
                                <br/>
                                <div dangerouslySetInnerHTML={{__html: product.description}}/>
                            </div>
                    }
                </div>

                <footer className=" card-footer">
                    {
                        detailedView ?
                            <div className=" card-footer-item">
                                <span className=" icon">
                                    <i className=" fa fa-bolt"/>
                                </span>
                                <small>{product.type + " · R$" + product.price.toFixed(2)}</small>
                            </div>
                            :
                            <Link to={product.route} className="card-footer-item">
                                <span className=" icon">
                                    <i className=" fa fa-share"/>
                                </span>
                            </Link>
                    }

                    <button className=" card-footer-item" onClick={() => addToCart(product)}>
                        <span className="icon">
                            <i className="fa fa-cart-plus"/>
                        </span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default ProductCard;
