import TopBar from "./TopBar"
import Header from "./Header"
import MainNav from "./MainNav"
import { Fragment } from 'react'

function HeadersWrapper({cartNum, cartItems}) {
    return ( 
        <Fragment>
            <TopBar></TopBar>
            <Header cartNum={cartNum} cartItems={cartItems}></Header>
            <MainNav></MainNav>
        </Fragment>
     );
}

export default HeadersWrapper;