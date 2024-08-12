import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Expenses</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add an Item</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;