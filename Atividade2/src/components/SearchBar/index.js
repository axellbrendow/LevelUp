import React from 'react';
import './index.css';
import ProductCard from "../ProductCard";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        const loading = !!props.loading;
        const products = props.products ? props.products : [];

        this.state = {
            loading,
            products
        };

        this.submit = this.submit.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    submit(e) { // e = evento do formulario
        e.preventDefault(); // previnir reload no browser

        if (this.keyword) {
            this.submitted = true;

            this.products.search(this.keyword).then(
                (items) => {
                    this.items = items;
                    if (items.length) this.submitted = false;
                }
            );
        }
    }

    hideModal() {
        this.closeSearch.emit();
    }

    goTo(item) {
        this.hideModal();
        this.router.navigate([item.router]);
        this.products.scrollTop();
    }

    render() {
        return (
            <div className="modal animated slideInUp">

                <div className="modal-background"/>

                <div className="modal-content">
                    <nav className="nav">

                        <div className="nav-left">
                            <a className="close is-large" onClick={this.hideModal}><i
                                className="fa fa-long-arrow-left"/> Voltar</a>

                            <form noValidate onSubmit={(event) => this.submit(event)} /*#searchForm="ngForm"*/>
                                <div className="field">
                                    <div className="control">
                                        <input /*[(ngModel)]="keyword"*/ name="keyword" type="text"
                                                                         className="input is-rounded"
                                                                         placeholder="Busque um produto"/>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="nav-center">
                        </div>

                        <div className="nav-right">
                        </div>

                    </nav>

                    <div className="container">
                        {
                            this.state.items.map((item) =>
                                <article onClick={() => this.goTo(item)} className="media animated slideInDown">

                                    <figure className="media-left">
                                        <p className="image is-64x64">
                                            <img src={"../../assets/games/" + item.image} alt={"Jogo"}/>
                                        </p>
                                    </figure>

                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{item.name}</strong>
                                                <br/>
                                                <small>{item.type + "·" + item.year}</small>
                                            </p>
                                        </div>
                                    </div>

                                </article>
                            )
                        }

                        {
                            this.state.keyword ? null :
                                <small>Digite e pressione enter</small>
                        }

                        {
                            !(!this.state.items.length && this.state.submitted) ? null :
                                <small>nada encontrado =(</small>
                        }

                    </div>
                </div>

            </div>
        );
    }
}

export default SearchBar;
