import List from "./List.jsx";
import BeautyImg from "../assets/images/beauty-img.png";
import ClothesImg from "../assets/images/clothes-img.png";
import SetsImg from "../assets/images/sets-img.png";
import AccessoriesImg from "../assets/images/accessories-img.png";
import Rightarrow from "../assets/images/right-arrow.svg";
import Leftarrow from "../assets/images/left-arrow-next.svg";

export default function ListCollection() {
  return (
    <section className="list-collection">
      <h1>Categories</h1>
      <div className="lists">
        <div className="arrow">
          <img src={Leftarrow} alt="arrow" />
          <img src={Rightarrow} alt="arrow" />
        </div>
        <List image={BeautyImg} text={"Beauty"} />
        <List image={ClothesImg} text={"Clothes"} />
        <List image={SetsImg} text={"Sets"} />
        <List image={AccessoriesImg} text={"Accessories"} />
      </div>
    </section>
  );
}
