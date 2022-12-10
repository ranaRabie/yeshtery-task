import Description from "./Description";
import Newsletter from "./Newsletter";
import Lists from "./Lists";
import Copyright from "./Copyright";
function Footer() {
    return ( 
        <footer className="main-footer">
            <div className="container">
                <div className="main-footer__inner-wrapper">
                    <div>
                        <Description />
                    </div>
                    <div>
                        <Newsletter />
                        <Lists />
                    </div>
                </div>
                <Copyright />
            </div>
        </footer>
     );
}

export default Footer;