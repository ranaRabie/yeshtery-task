import { Component } from 'react'
import HeadersWrapper from "../components/Header"
import { Fragment } from 'react';

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
            </Fragment>
         );
    }
}
 
export default ProductPage;