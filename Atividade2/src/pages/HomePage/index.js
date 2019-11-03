import React from 'react';
import './index.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";

class HomePage extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            isMenuVisible: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
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
                /* <Header/> */
                <Menu isVisible={this.state.isMenuVisible}/>

                <div onClick={this.hideMenu}>
                    <Banner/>
                    <ProductList/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default HomePage;
