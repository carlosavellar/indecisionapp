const React = require("react");
const Header = (props) =>{
    return(
        <header className="header">
            <h1 className="header__title container">{props.title}</h1>
            {props.subTitle && <h3 className="header__subtitle container">{props.subTitle}</h3>}
        </header>
    )
}
Header.defaultProps={
    subTitle: "Senior"
}

export default Header;

