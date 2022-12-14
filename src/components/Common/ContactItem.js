function ContactItem({icon, data}) {
    return ( 
        <a href="#" className="top-bar__contact-blk-item">
            <div className="top-bar__contact-blk-item-ico">
                <img src={icon} alt="contact icon" />
            </div>
            <div className="top-bar__contact-blk-item-text">
               { data }
            </div>
        </a>
     );
}

export default ContactItem;