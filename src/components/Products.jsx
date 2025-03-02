import CameraImg from "../assets/images/camera-product.png";
import BrushesImg from "../assets/images/brushes-product.png";
import GlasessImg from "../assets/images/glasses-product.png";
import LipstickImg from "../assets/images/lips-product.png";
import HeartIcon from "../assets/icons/Vector.svg";

export default function Product({ onMargin }) {
  const alt = "Product Images";
  return (
    <section className={`products ${onMargin === undefined ? "" : onMargin}`}>
      {/* Camera Card */}
      <div className="product-card">
        <div className="product-image">
          <img src={CameraImg} alt={alt} loading="lazy" />
          <div className="sale-label">
            <label>SALE</label>
          </div>
          <div className="heart-icon">
            <img src={HeartIcon} alt="icon" />
          </div>
        </div>
        <div className="product-info">
          <h5>Satin trousers with elastic</h5>
          <div className="product-price">
            <span className="new-price">$68.00</span>
            <span className="old-price">$98.00</span>
            <div className="discount">
              <span>-25%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brushes card */}
      <div className="product-card">
        <div className="product-image">
          <img src={BrushesImg} alt={alt} loading="lazy" />
          <div className="new-label">
            <label>NEW</label>
          </div>
          <div className="heart-icon">
            <img src={HeartIcon} alt="icon" />
          </div>
        </div>
        <div className="product-info">
          <h5>Straight trousers</h5>
          <div className="product-price">
            <span className="new-price">$68.00</span>
          </div>
        </div>
      </div>

      {/* Glasses Card */}
      <div className="product-card">
        <div className="product-image">
          <img src={GlasessImg} alt={alt} loading="lazy" />
          <div className="sale-label">
            <label>SALE</label>
          </div>
          <div className="heart-icon">
            <img src={HeartIcon} alt="icon" />
          </div>
        </div>
        <div className="product-info">
          <h5>Biker-style leggings</h5>
          <div className="product-price">
            <span className="new-price">$68.00</span>
            <span className="old-price">$98.00</span>
            <div className="discount">
              <span>-25%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Lipstik Card */}
      <div className="product-card">
        <div className="product-image">
          <img src={LipstickImg} alt={alt} loading="lazy" />
          <div className="new-label">
            <label>NEW</label>
          </div>
          <div className="heart-icon">
            <img src={HeartIcon} alt="icon" />
          </div>
        </div>
        <div className="product-info">
          <h5>Jacquard fluid trousers</h5>
          <div className="product-price">
            <span className="new-price">$68.00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
