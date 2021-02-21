import * as React from "react";
import Product from "./Product";
import axios from "axios";

class ProductsPage extends React.Component {
    constructor() {
        super();
        this.state = {products: []}
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct = () => {
        axios.get('http://localhost:8080/products').then(result => {
            this.setState({products: result.data})
        }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return <div className="row">

            <div className="large-12 columns productgalleries">

                <div className="row">
                    {this.state.products.map(product => (
                        <Product title={product.title} price={product.price} key={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    }
}

export default ProductsPage;