import { Link, Outlet } from "react-router-dom";
import "./Header.css"
import logo from "../../assets/logo.png"
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {

    const cartItem = useSelector((data) => data.cart?.cart);

    const [menuOpen, setMenuOpen] = useState(false);
    const close = () => setMenuOpen(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const womenDropdown = [
        {
            name: "Women Tops",
            url: "womens-tops"
        },
        {
            name: "Women Dresses",
            url: "womens-dresses"
        },
        {
            name: "Women Jewelery",
            url: "womens-jewelery"
        },
        {
            name: "Women Bags",
            url: "womens-bags"
        },
        {
            name: "Women Watches",
            url: "womens-watches"
        },
        {
            name: "Women Shoes",
            url: "womens-shoes"
        },
    ]
    return (
        <div>
            <nav className="navbar fixed-top">
                <div className="d-flex align-items-center justify-content-between w-100 px-3">
                    <div className="navbar-container">
                        <div className="logo">
                            <Link to="/" className="navbar-brand">
                                <img src={logo} alt="" height={40} />
                            </Link>
                        </div>
                        {/* <div className="search-bar">
                            <input type="text" placeholder="Search for products, brands and more" />
                        </div> */}
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            <i className="fa fa-bars" />
                        </div>
                        <div className={`nav-links ${menuOpen ? "show" : ""}`} id="nav-links">
                            <div className="dropdown">
                                <Link to='men' onClick={close}>Men</Link>
                                <div className="dropdown-content">
                                    <Link to="men?category=mens-shirts">Mens Shirts</Link>
                                    <Link to="men?category=mens-watches">Mens Watches</Link>
                                    <Link to="men?category=mens-shoes">Mens Shoes</Link>

                                </div>
                            </div>
                            <div className="dropdown">
                                <Link to="women" onClick={close}>Women</Link>
                                <div className="dropdown-content">
                                    {
                                        womenDropdown.map((data) => (
                                            <Link to={`women?category=${data.url}`} key={data.name}>{data.name}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* <div className="dropdown">
                                <a href="#">Kids</a>
                                <div className="dropdown-content">
                                    <a href="#">T-Shirts</a>
                                    <a href="#">Shirts</a>
                                    <a href="#">Jeans</a>
                                </div>
                            </div> */}
                            <div className="dropdown">
                                <Link to="home-livings" onClick={close}>Home & Living</Link>
                                <div className="dropdown-content">
                                    <Link to="home-livings?category=furniture">Furniture</Link>
                                    <Link to="home-livings?category=home-decoration">Home Decoration</Link>
                                    <Link to="home-livings?category=kitchen-accessories">Kitchen Accessories</Link>

                                </div>
                            </div>
                            <div className="dropdown">
                                <Link to="beauty" onClick={close}>Beauty</Link>
                                <div className="dropdown-content">
                                    <Link to="beauty?category=makeup">Makeup</Link>
                                    <Link to="beauty?category=fragrances">Fragrances</Link>
                                    <Link to="beauty?category=skin-care">Skin Care</Link>

                                </div>
                            </div>
                            <div className="dropdown">
                                <Link to="electronics" onClick={close}>Electronics</Link>
                                <div className="dropdown-content">
                                    <Link to="electronics?category=smartphones">Smartphones</Link>
                                    <Link to="electronics?category=tablets">Tablets</Link>
                                    <Link to="electronics?category=laptops">Laptops</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-icons">
                        <Link to="cart" className="position-relative">
                            <i className="fa fa-shopping-cart fs-2 color" />
                            <span className="count">{cartItem ? cartItem.length : 0}</span>
                        </Link>
                        <a href="#">
                            <i className="fa fa-user fs-2 color" />
                        </a>
                        {/* <a href="#">
                            <i className="fa fa-heart" />
                        </a> */}

                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Header
