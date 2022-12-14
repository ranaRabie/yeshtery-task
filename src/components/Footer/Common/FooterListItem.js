function ListItem({ name, icon }) {
    return ( 
        <li>
            <a href="#">
                {icon ? <img src={icon} alt="Footer list item icon" /> : ''}
                { name }
            </a>
        </li>
     );
}

export default ListItem;