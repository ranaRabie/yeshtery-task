function ListItem({ name, icon }) {
    return ( 
        <li>
            <a href="#">
                {icon ? <img src={icon} alt="image" /> : ''}
                { name }
            </a>
        </li>
     );
}

export default ListItem;