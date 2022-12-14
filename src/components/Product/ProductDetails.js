import { Component } from 'react'

class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        selectedSize: null,
        count: 1,
        size: null
    }
    handleSizeChange = (e) => {
        this.setState({size: e.target.innerText});
        this.props.onSelectSize(e.target.innerText);            
    }
    handleCountChange = (e) => {
        this.props.handleCount(e.target.value);            
    }
    decreamentCount = () => {
        if(this.state.count !== 1){
            this.setState({count: this.state.count-1});
            this.props.handleCount(this.state.count-1); 
        }
    }
    increamentCount = () => {
        this.setState({count: this.state.count+1});
        this.props.handleCount(this.state.count+1);    
    }
    render() { 
        return ( 
            <div className="single-product__details">
                <div className="single-product__details-logo"><img src={ this.props.product.logo } /></div>
                <h3>{ this.props.product.name }</h3>
                <div className="single-product__details-category">{ this.props.product.category }</div>
                <div className="single-product__details-price">{ this.props.product.price }</div>
                <h4>Size</h4>
                <div className="single-product__details-sizes">
                    {this.props.product.sizes.map((size, key) => <div key={key} className={(this.state.size === size ? 'active' : '')} onClick={this.handleSizeChange}>{size}</div>)}
                </div>
                <h4>Quantity</h4>
                <div className="single-product__details-count">
                    <button onClick={this.decreamentCount}>-</button>
                    <input type="number" value={this.state.count} onChange={this.handleCountChange} />
                    <button onClick={this.increamentCount}>+</button>
                </div>
                <div className="single-product__details-actions">
                    <button onClick={this.props.addToCartClick}>Add to cart</button>
                    <button>Pick From Store</button>
                </div>
            </div>
         );
    }
}
 
export default ProductDetails;