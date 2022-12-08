function ContactItem({icon, data}) {
    return ( 
        <a class="top-bar__contact-blk-item">
            <div class="top-bar__contact-blk-item-ico">
                <img src={icon} />
            </div>
            <div class="top-bar__contact-blk-item-text">
               { data }
            </div>
        </a>
     );
}

export default ContactItem;