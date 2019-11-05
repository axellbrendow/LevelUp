import React from 'react';
import './index.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductCard from "../../components/ProductCard";
import products from '../../products'

class ProductPage extends React.Component {

    constructor(props)
    {
        super(props);

        const productId = props.match.params.id;
        const product = products.find((product) => product.id == productId);

        this.state = {
            cart: {
                products: []
            },
            isMenuVisible: false,
            product,
        };

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product)
    {
        // Checa se não existe um produto com o id do recebido
        if (!this.state.cart.products.find((aProduct) => aProduct.id == product.id))
        {
            this.setState({
                cart: {
                    products: [ ...this.state.cart.products, product ]
                },
            });

            console.log(`O produto ${product.name} foi inserido com sucesso!`);
        }

        else console.log(`O produto ${product.name} não foi inserido!`);
    }

    showMenu()
    {
        this.setState({isMenuVisible: true});
    }

    hideMenu()
    {
        this.setState({isMenuVisible: false});
    }

    render()
    {
        return (
            <div>
                <Header cart={this.state.cart}/>
                <Menu isVisible={this.state.isMenuVisible}/>

                <div onClick={this.hideMenu}>
                    <div className="container">
                        <ProductCard addToCart={this.addToCart} product={this.state.product} detailedView={true}/>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ProductPage;
