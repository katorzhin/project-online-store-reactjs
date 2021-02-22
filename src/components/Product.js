import * as React from "react";

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    addToCart = (product) => {
        console.log("adding to the cart");
        console.log(product);
        localStorage.setItem("products",product);


    };

    render() {
        return <div className="large-3 small-6 columns">
            <img src="http://placehold.it/1000x1000&text=Thumbnail"/>
            <div className="panel">
                <h5>{this.props.product.title}</h5>
                <h6 className="subheader">{this.props.product.price}</h6>
                <button onClick={()=>this.addToCart(this.props.product)}>Add to cart</button>
            </div>
        </div>

    }
}

export default Product;