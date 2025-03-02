import RightArrow from "../assets/images/rightArrow-round.png";
import LeftArrow from "../assets/images/leftArrow-round.png";
import RightArrowIcon from "../assets/images/right-arrow.svg";

export default function BreadCrumbs() {
  return (
    <section className="breadcrumbs">
      <div className="breadcrumbs-links">
        <a href="#">Homepage</a>
        <img src={RightArrowIcon} alt="Arrow icon" />
        <a href="#">Women</a>
        <img src={RightArrowIcon} alt="Arrow icon" />
        <p>Leather boots with tall leg</p>
      </div>
      <div className="breadcrumbs-btn">
        <img src={LeftArrow} alt="Left Arrow icon" />
        <p>Previous Product</p>

        <div className="line"></div>
        <p>Next Product</p>
        <img src={RightArrow} alt="Right Arrow icon" />
      </div>
    </section>
  );
}
