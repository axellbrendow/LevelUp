import React from 'react';
import './index.css';
import ProductCard from "../ProductCard";

/**
 * Expected props:
 * {
 *  products: [
 *      {image: string,
 *      route: string,
 *      name: string,
 *      price: number,
 *      year: number,
 *      description: string,
 *      type: string}, ...]
 * }
 * @param PRODUCTS
 */
import PRODUCTS from "../../products";

function ProductList() {
    return (
        <section className="products">
            <div className="container">

                {/*{
                    !this.state.loading ? null :
                        <h2 className="subtitle loading">
                            <br/><br/><br/>
                            <span>Carregando <strong>games...</strong></span>
                            <br/><br/><br/>
                        </h2>
                }*/}

                <div className=" columns is-desktop is-multiline">
                    {
                        PRODUCTS.map((product, i) =>
                            <ProductCard className={"column" +
                            (i == 0 || i % 11 == 0 ? 'is-half' : '') +
                            (i > 0 && i % 11 != 0 ? 'is-one-quarter' : '')} product={product}/>
                        )
                    }
                </div>

            </div>
        </section>
    );
}

export default ProductList;
