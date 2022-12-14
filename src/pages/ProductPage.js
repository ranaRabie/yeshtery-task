import { Component, Fragment } from 'react'
import HeadersWrapper from "../components/Header"
import Footer from "../components/Footer"
import products from '../services/products.json'
import Product from '../components/Product'

class ProductPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        prodId: 1,
        product: {
            "id": null,
            "images": [],
            "logo": "",
            "name": "",
            "category": "",
            "rate": null,
            "price": "",
            "sizes": [],
            "colors": []
        },
        cartNum: 0,
        cartItems: [],
        count: 1,
        size: null
    }
    componentDidMount() {
        const curProduct = products.list.find(product => product.id === this.state.prodId)
        this.setState({product: curProduct});
    }
    componentDidUpdate() {
    }
    handleAddToCart = () => {
        this.setState({cartItems: [...this.state.cartItems, {"img": this.state.product.images[0],"name": this.state.product.name, "count": this.state.count, "size": this.state.size}]});
        this.setState({cartNum: parseInt(this.state.cartNum)+parseInt(this.state.count)});
    }
    handleSize = (s) => {
        this.state.size = s
    }
    handleCount = (c) => {
        this.state.count = c
    }
    render() { 
        return ( 
            <Fragment>
                <HeadersWrapper cartNum={this.state.cartNum} cartItems={this.state.cartItems}></HeadersWrapper>
                <Product handleSizeChange={this.handleSize} handleCountChange={this.handleCount} product={this.state.product} addToCartClick={this.handleAddToCart} images={this.state.product.images}></Product>
                <Footer />
            </Fragment>
         );
    }
}
 
export default ProductPage;