import InputBtn from "../assets/icons/input-btn.svg";

import FacebookIcon from "../assets/icons/facebook-icon.svg";
import InstaIcon from "../assets/icons/instagram-icon.svg";
import YoutubeIcon from "../assets/icons/youtube-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import PinterestIcon from "../assets/icons/pinterest-icon.svg";

import CreditCard1 from "../assets/images/creditcard-1.png";
import CreditCard2 from "../assets/images/creditcard-2.png";
import CreditCard3 from "../assets/images/creditcard-3.png";
import CreditCard4 from "../assets/images/creditcard-4.png";
import CreditCard5 from "../assets/images/creditcard-5.png";
import CreditCard6 from "../assets/images/creditcard-6.png";

export default function Footer() {
  return (
    <>
      <div className="footer-contanier">
        <footer className="main-footer">
          <div className="address">
            <h6>Anvogue</h6>
            <div className="info">
              <div className="mail">
                <p className="mail-phone-addres">Mail:</p>
                <a href="#">hi.avitex@gmail.com</a>
              </div>
              <div className="phone">
                <p className="mail-phone-addres">Phone:</p>
                <a href="#">1-333-345-6868</a>
              </div>
              <div className="address-info">
                <p className="mail-phone-addres">Address:</p>
                <a href="#">549 Oak St.Crystal Lake, IL 60014</a>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="information">
              <p>INFOMATION</p>
              <div className="information-links">
                <a href="#">Contact Us</a>
                <a href="#">Career</a>
                <a href="#">My Account</a>
                <a href="#">Order & Returns</a>
                <a href="#">FAQs</a>
              </div>
            </div>
            <div className="quick-shop">
              <p>QUICK SHOP</p>
              <div className="quick-shop-links">
                <a href="#">Women</a>
                <a href="#">Men</a>
                <a href="#">Clothes</a>
                <a href="#">Accessories</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="costumer-service">
              <p>CUSTOMER SERVICES</p>
              <div className="costumer-service-links">
                <a href="#">Orders FAQs</a>
                <a href="#">Shipping</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Return & Refund</a>
              </div>
            </div>
          </div>
          <div className="footer-newletter">
            <div className="text">
              <p>NEWLETTER</p>
              <p>
                Sign up for our newsletter and get 10% off your first purchase
              </p>
            </div>
            <div className="form">
              <input type="text" placeholder="Enter your e-mail" />
              <button>
                <img src={InputBtn} alt="button-icon" />
              </button>
            </div>
            <div className="social">
              <img src={FacebookIcon} alt="Social icon" />
              <img src={InstaIcon} alt="Social icon" />
              <img src={YoutubeIcon} alt="Social icon" />
              <img src={TwitterIcon} alt="Social icon" />
              <img src={PinterestIcon} alt="Social icon" />
            </div>
          </div>
        </footer>
        <footer className="footer-bottom">
          <div className="copyright">
            <p>©2023 Anvogue. All Rights Reserved.</p>
          </div>
          <div className="payment">
            <p>Payment:</p>
            <img src={CreditCard1} alt="Credit Cards image" />
            <img src={CreditCard2} alt="Credit Cards image" />
            <img src={CreditCard3} alt="Credit Cards image" />
            <img src={CreditCard4} alt="Credit Cards image" />
            <img src={CreditCard5} alt="Credit Cards image" />
            <img src={CreditCard6} alt="Credit Cards image" />
          </div>
        </footer>
      </div>
    </>
  );
}
