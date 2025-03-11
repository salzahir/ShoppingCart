import logo from "./assets/logo.jpg";

function Header() {
    return (
        <header className="header">
            <button>Menu</button>
            <img src={logo} alt="Front End Fiasco Logo" />
            <h1>Frontend Fiasco</h1>
            <button>Cart</button>
        </header>
    );
}

export default Header;