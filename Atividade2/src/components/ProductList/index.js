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
 * @param products
 */
import importedProducts from "../../products";

class ProductList extends React.Component {

    myProducts = [ ...importedProducts ];

    constructor(props)
    {
        super(props);

        this.myProducts = this.myProducts.map((product) =>
        {
            product.route = '/products/' + product.id;
            return product;
        });

        this.listProducts = this.listProducts.bind(this);
    }

    listProducts()
    {
        // return this.state.cart.products;
        return this.myProducts;
    }

    render() {
        return (
            <section className="productlist-root products">
                <div className="container">

                    {/* {
                    !this.props.loading ? null :
                        <h2 className="subtitle loading">
                            <br/><br/><br/>
                            <span>Carregando <strong>games...</strong></span>
                            <br/><br/><br/>
                        </h2>
                    } */}

                    <div className="columns is-desktop is-multiline">
                        {
                            this.listProducts().map((product, i) =>
                                <ProductCard key={product.id} className={"column" +
                                (i == 0 || i % 11 == 0 ? ' is-half' : '') +
                                (i > 0 && i % 11 != 0 ? ' is-one-quarter' : '')}
                                             product={product}
                                             addToCart={this.props.addToCart}/>
                            )
                        }
                    </div>

                </div>
            </section>
        );
    }
}

export default ProductList;
