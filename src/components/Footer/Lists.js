import ListItem from "./Common/FooterListItem";
function Lists() {
    return ( 
        <div className="main-footer__lists">
            <ul>
                <ListItem name="about us" />
                <ListItem name="contact us" />
                <ListItem name="track order" />
                <ListItem name="terms & conditions" />
                <ListItem name="Privacy Policy" />
                <ListItem name="Sell With Us" />
                <ListItem name="Shipping And Returns" />
            </ul>
            <ul>
                <ListItem name="/YESHTERY" icon="images/social/facebook.svg" />
                <ListItem name="/YESHTERY" icon="images/social/in.svg" />
                <ListItem name="/YESHTERY" icon="images/social/insta.svg" />
                <ListItem name="/YESHTERY" icon="images/social/twitter.svg" />
            </ul>
        </div>
     );
}

export default Lists;