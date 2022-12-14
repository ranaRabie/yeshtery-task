import ContactItem from '../Common/ContactItem'
function TopBar() {
    return ( 
        <div className="top-bar__wrapper">
            <div className="container">
                <div className="top-bar__inner-wrapper">
                    <div><img src="images/logo.svg" alt="yeshtery logo" /></div>
                    <div>Valentine’s Day Offers! Buy Two Get One Free <a href="#">Shop Now</a></div>
                    <div className="top-bar__contact-blk">
                        <ContactItem data="Contact Us" icon="images/icons/phone.svg" />
                        <ContactItem data="Track Order" icon="images/icons/cart.svg" />
                        <ContactItem data="Find a Store" icon="images/icons/location.svg" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default TopBar;