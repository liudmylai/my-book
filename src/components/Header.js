function Header(props) {
    return(
        <div className="header">
            <div className="logo">{props.logo}</div>
            <div className="menu"> 
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>About</li>
            </ul>
            </div>
        </div>
    );
}
export default Header;