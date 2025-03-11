import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Front End Fiasco Logo" />
            <h2>Frontend Fiasco</h2>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/products"><button>Products</button></Link>
                <Link to="/cart"><button>Cart</button></Link>
                <Link to="/profile"><button>Profile</button></Link>
            </nav>
        </header>
    );
}

export default Header;