import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css';

// <a tag> is a HTML stuff. It kills react and refreshes the page. In order to avoid that we need to use 'Link'
// Every Router has default props
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={"/about"}>About</Link>
        </div>
    );
}

export default Navigation;