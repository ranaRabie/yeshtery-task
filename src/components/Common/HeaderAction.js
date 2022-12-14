function HeaderAction({ onClick, ico, name, children }) {
    return ( 
        <a href="#" className="main-header__actions-item" onClick={onClick}>
            <div className="main-header__actions-item-ico">{ ico }</div>
            <div className="main-header__actions-item-name">{ name }</div>
            { children }
        </a>
     );
}

export default HeaderAction;