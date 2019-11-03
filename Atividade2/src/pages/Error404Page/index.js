import React from 'react';
import './index.css';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";

function Error404Page() {
    return (
        <div>
            <section className="hero is-warning is-fullheight">
                <div className="hero-body">
                    <div className="container">

                        <h1 className="title is-4">
                            Página não encontrada
                        </h1>

                        <br/>

                        <h2 className="subtitle is-6">

                            <Link to={"/"}>
                                <span className="icon">
                                    <i className="fa fa-long-arrow-left"/>
                                </span>

                                <span>
                                    Voltar
                                </span>
                            </Link>

                        </h2>

                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Error404Page;
