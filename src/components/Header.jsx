import SearchIcon from "../assets/icons/search-icon.svg";
import userIcon from "../assets/icons/user-icon.svg";
import heartIcon from "../assets/icons/heart-icon.svg";
import shoppingBagIcon from "../assets/icons/shopping-bag-icon.svg";
import Logo from "../assets/images/Logo.svg";
import HamburgerMenu from "../assets/icons/hamburger-menu.svg";

export default function Header({ onChange, onUnChange }) {
  return (
    <>
      <nav>
        <div className="nav-div">
          <img src={Logo} alt="Logo" className="logo" />

          <div className="white-div"></div>

          <div className="menu">
            <a href="#" onClick={onUnChange}>
              DEMO
            </a>
            <a href="#">FEATURES</a>
            <a href="#">SHOP</a>
            <a href="#" onClick={onChange}>
              PRODUCT
            </a>
            <a href="#">BLOG</a>
            <a href="#">PAGES</a>
          </div>
        </div>

        <div className="nav-icons">
          <img src={SearchIcon} alt="Icons" />
          <img src={userIcon} alt="Icons" />
          <img src={heartIcon} alt="Icons" />
          <img src={shoppingBagIcon} alt="Icons" />
        </div>
        <img src={HamburgerMenu} alt="Icon" className="ham-menu" />
      </nav>
    </>
  );
}
