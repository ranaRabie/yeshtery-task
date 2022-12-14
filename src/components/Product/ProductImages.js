function ProductImages({ images }) {
    return (  
        <div className="single-product__images">
            <div className="single-product__images-single-img">
                <img src={images[0]} alt="product main image" />
            </div>
            <div className="single-product__images-single-thumbs">
                {images.map((img, key) => <div key={key}><img src={img} alt="product thumb image" /></div>)}
            </div>
        </div>
    );
}

export default ProductImages;