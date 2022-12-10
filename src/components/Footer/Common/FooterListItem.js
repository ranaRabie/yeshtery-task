function ListItem({ name, icon }) {
    return ( 
        <li>
            <a>
                {icon ? <img src={icon} /> : ''}
                { name }
            </a>
        </li>
     );
}

export default ListItem;