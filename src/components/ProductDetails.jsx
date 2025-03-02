import GetItToday from "./GetItToday.jsx";
import Description from "./Description.jsx";
import ProductHeader from "./ProductHeader.jsx";
import ProductOptions from "./ProductOptions.jsx";

export default function ProductDetails() {
  return (
    <section className="product-details">
      <ProductHeader />
      <ProductOptions />
      <GetItToday />
      <Description />
    </section>
  );
}
