function CartItem({ item }) {
    return ( 
        <div className="cart__dropdown-list-item">
            <div className="cart__dropdown-list-item-image">{ item.image }</div>
            <div className="cart__dropdown-list-item-count-body">
                <div className="cart__dropdown-list-item-name">{ item.name }</div>
                <div className="cart__dropdown-list-item-count">{ item.count }</div>
            </div>
        </div>
     );
}

export default CartItem;