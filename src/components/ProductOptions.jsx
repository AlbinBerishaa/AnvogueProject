import Repeat from "../assets/images/repeat.png";
import Share from "../assets/images/share.png";
import { useState } from "react";

export default function ProductOptions() {
  const [pickedColor, setPickedColor] = useState("Blue");
  const [selectedSize, setSelectedSize] = useState(null);

  function handelSizePick(size) {
    setSelectedSize(size);
  }

  function handelColorChange(color) {
    setPickedColor(color);
  }
  return (
    <div className="choose-option">
      <div className="colors">
        <div className="choosed-color">
          <p>Color:</p>
          <p>{pickedColor}</p>
        </div>
        <div className="color-options">
          <button
            style={{ backgroundColor: "#FFD34F" }}
            onClick={() => handelColorChange("Yellow")}
          ></button>
          <button
            style={{ backgroundColor: "#096F00" }}
            onClick={() => handelColorChange("Green")}
          ></button>
          <button
            style={{ backgroundColor: "#001182" }}
            onClick={() => handelColorChange("Blue")}
          ></button>
          <button
            style={{ backgroundColor: "#FF7373" }}
            onClick={() => handelColorChange("Pink")}
          ></button>
          <button
            style={{ backgroundColor: "#FFFFFF" }}
            onClick={() => handelColorChange("White")}
          ></button>
        </div>
      </div>
      <div className="size">
        <div className="size-text">
          <p>Size:</p>
          <p>{selectedSize === null ? "L" : selectedSize}</p>
          <a href="#">Size Guide</a>
        </div>
        <div className="size-btn">
          <button
            onClick={() => handelSizePick("S")}
            id={selectedSize === "S" ? "size-btn-active" : ""}
          >
            S
          </button>
          <button
            onClick={() => handelSizePick("M")}
            id={selectedSize === "M" ? "size-btn-active" : ""}
          >
            M
          </button>
          <button
            onClick={() => handelSizePick("L")}
            id={selectedSize === "L" ? "size-btn-active" : ""}
          >
            L
          </button>
          <button
            onClick={() => handelSizePick("XL")}
            id={selectedSize === "XL" ? "size-btn-active" : ""}
          >
            XL
          </button>
          <button disabled className="disabled">
            <div className="left-dotted"></div>
            XXL
            <div className="right-dotted"></div>
          </button>
        </div>
      </div>
      <div className="quantity">
        <p>Quantity:</p>
        <div className="quantity-btn">
          <button>PURCHASE ON AMAZON</button>
          <div className="share-btn">
            <div className="compare">
              <img src={Repeat} alt="Compare Icon" />
              <p>Compare</p>
            </div>
            <div className="share">
              <img src={Share} alt="Share Icon" />
              <p>Share Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
