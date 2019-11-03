import React from 'react';
import './index.css';
import SearchBar from "../SearchBar";
import Logo from "../Logo";
import {Link} from "react-router-dom";
import Cartbar from "../Cartbar";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        };

        this.showSearch = this.showSearch.bind(this);
        this.hideSearch = this.hideSearch.bind(this);
    }

    showSearch()
    {
        this.setState({isModalVisible: true});
    }

    hideSearch()
    {
        this.setState({isModalVisible: false});
    }

    render() {
        let nav =
            <nav className="navbar animated slideInDown is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger burger" onClick={this.menu.open()}>
                        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <Link to={"/"}>
                    <Logo/>
                </Link>

                <div id="navbarBasicExample" className="navbar-menu">

                    <div className="navbar-start">
                        <a className="navbar-item">

                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">

                            <div className="navbar-dropdown">
                                <a className="navbar-item">

                                </a>
                                <a className="navbar-item">

                                </a>
                                <a className="navbar-item">

                                </a>
                                <hr className="navbar-divider"/>
                                    <a className="navbar-item">

                                    </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">

                        <div className="navbar-item" >
                            <a onClick={this.showSearch}>
                            <i className="fa fa-search"/>
                    </a>
                </div>

                <div className="navbar-item">
                    <Cartbar/>
                </div>

            </div>

    </div>
    </nav>;

        return (
            !this.state.isModalVisible ? [ nav ] : [ <SearchBar closeSearch={this.hideSearch}/>, nav ]
        );
    }
}

export default Header;
