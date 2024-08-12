import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Expenses</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Add an Item</a>
            </div>
        </nav>

    );
}
 
export default Navbar;