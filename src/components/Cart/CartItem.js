function CartItem({ item }) {
    return ( 
        <div className="cart__dropdown-list-item">
            <div className="cart__dropdown-list-item-image"><img src={ item.image } /></div>
            <div className="cart__dropdown-list-item-body">
                <div className="cart__dropdown-list-item-name">{ item.name }</div>
                <div className="cart__dropdown-list-item-dets">size:{ item.size }, count: { item.count }</div>
            </div>
        </div>
     );
}

export default CartItem;