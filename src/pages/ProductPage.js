import TopBar from "../components/TopBar"
import Header from "../components/Header"
import MainNav from "../components/MainNav"
import { Fragment } from 'react';

function ProductPage() {
    const cartNum = 0;
    const handleCartClick = () => {
        alert('cart')
    }
    return ( 
        <Fragment>
            <TopBar></TopBar>
            <Header cartClick={handleCartClick} cartNum={cartNum}></Header>
            <MainNav></MainNav>
        </Fragment>
     );
}

export default ProductPage;