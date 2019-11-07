import React from 'react';
import './index.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";

class ProductsPage extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            cart: {
                products: []
            },
            isMenuVisible: false,
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
                <Header cart={this.state.cart} showMenu={this.showMenu}/>
                <Menu isVisible={this.state.isMenuVisible}/>

                <div onClick={this.hideMenu}>
                    <ProductList addToCart={this.addToCart}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ProductsPage;
