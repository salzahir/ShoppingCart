import logo from "./assets/logo.jpg";

function Header() {
    return (
        <header className="header">
            <button>Menu</button>
            <img src={logo} alt="Front End Fiasco Logo" />
            <h2>Frontend Fiasco</h2>
            <button>Cart</button>
            <button>Profile</button>
        </header>
    );
}

export default Header;