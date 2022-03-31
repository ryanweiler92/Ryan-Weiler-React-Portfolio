import React from "react";

function Nav(props){

    const {
        categories = [],
        contactSelected,
        setContactSelected
    } = props;

    const handleClick = (item) => {
        console.log(item);
        return item;
    }

    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
               <h3>Ryan Weiler</h3>
            </a>
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="/about" onClick={() => setContactSelected(false)}>
                            About Me
                            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">Portfolio</a>
                    </li>
                    <li className={`${contactSelected && 'navActive'}`}>
                        <a className="nav-link active text-white" href="#" onClick={() => setContactSelected(true)}>
                            Contact
                            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav;