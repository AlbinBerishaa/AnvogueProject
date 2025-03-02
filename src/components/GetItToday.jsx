import TruckIcon from "../assets/icons/shipping-icon.svg";
import ReturnIcon from "../assets/icons/return-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";

export default function GetItToday() {
  return (
    <div className="shipping-info">
      <h2>Get It Today</h2>
      <div className="free-shipping">
        <img src={TruckIcon} alt="Truck Icon" />
        <div className="shipping-description">
          <h6>Free shipping</h6>
          <p>Free shipping on orders over $75.</p>
        </div>
      </div>
      <div className="support">
        <img src={ReturnIcon} alt="Return Icon" />
        <div className="shipping-description">
          <h6>100 - Day Returns</h6>
          <p>Support from 8:30 AM to 10:00 PM everyday</p>
        </div>
      </div>
      <div className="returns">
        <img src={PhoneIcon} alt="Phone Icon" />
        <div className="shipping-description">
          <h6>100 - Day Returns</h6>
          <p>
            Not impressed? Get a refund. You have 100 days to break our hearts.
          </p>
        </div>
      </div>
    </div>
  );
}
