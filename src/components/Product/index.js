import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
function Product({ product, images, addToCartClick, handleSizeChange, handleCountChange }) {
    const handleSize = (s) => {
        handleSizeChange(s)
    }
    const handleCount = (c) => {
        handleCountChange(c)
    }
    return ( 
        <div className="container">
            <div className="single-product">
                <ProductImages images={images}></ProductImages>
                <ProductDetails product={product} addToCartClick={addToCartClick} onSelectSize={handleSize} handleCount={handleCount}></ProductDetails>
            </div>
        </div>
     );
}

export default Product;