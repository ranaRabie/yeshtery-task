import { Component, Fragment } from 'react'
import HeadersWrapper from "../components/Header"
import Footer from "../components/Footer"

class ProductPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        cartNum: 0,
        cartItems: [{name: 'abc', count: 1}, {name: 'def', count: 2}]
    }
    // handleCartClick = () => {
    //     // alert('cart')
    //     this.setState({cartNum: this.state.cartNum+1});
    // }
    render() { 
        return ( 
            <Fragment>
                <HeadersWrapper cartNum={this.state.cartNum} cartItems={this.state.cartItems}></HeadersWrapper>
                <Footer />
            </Fragment>
         );
    }
}
 
export default ProductPage;