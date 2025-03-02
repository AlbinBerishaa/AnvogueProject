import Tshirt1 from "../assets/images/t-shirt1.png";
import Tshirt2 from "../assets/images/t-shirt2.png";
import Tshirt3 from "../assets/images/t-shirt3.png";
import Tshirt4 from "../assets/images/t-shirt4.png";
import Tshirt5 from "../assets/images/t-shirt5.png";
import ProductDetails from "./ProductDetails";

export default function MainProduct() {
  return (
    <section className="main-product">
      <div className="t-shirts">
        <img src={Tshirt1} alt="T-shirts images" loading="lazy" />
        <img src={Tshirt2} alt="T-shirts images" loading="lazy" />
        <img
          src={Tshirt3}
          alt="T-shirts images"
          id="horizontal"
          loading="lazy"
        />
        <img src={Tshirt4} alt="T-shirts images" loading="lazy" />
        <img src={Tshirt5} alt="T-shirts images" loading="lazy" />
      </div>
      <ProductDetails />
    </section>
  );
}
