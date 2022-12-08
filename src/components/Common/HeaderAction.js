function HeaderAction(props) {
    return ( 
        <a className="main-header__actions-item" onClick={props.onClick}>
            <div className="main-header__actions-item-ico">{ props.children }</div>
            <div className="main-header__actions-item-name">{ props.name }</div>
        </a>
     );
}

export default HeaderAction;