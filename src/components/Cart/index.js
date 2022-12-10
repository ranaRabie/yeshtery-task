import CartItem from "./CartItem";

function Cart({ cartItems, isShowCart = false }) {
    return ( 
        <div className={`cart__dropdown ${isShowCart ? "cart__dropdown-active" : ""}`}>
            {cartItems.length > 0 
                ? <div className="cart__dropdown-list">
                    {cartItems.map(item => <CartItem item={item} />)}
                </div>
                : <div className="cart__dropdown-no-items">
                    No items
                </div>
            }
        </div>
     );
}

export default Cart;