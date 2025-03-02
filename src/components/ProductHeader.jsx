import HeartIcon from "../assets/icons/heart-icon.svg";
import FilledStar from "../assets/images/filledStar.png";
import EmptyStar from "../assets/images/emptyStar.png";

export default function ProductHeader() {
  const review = `(1.234 reviews)`;
  return (
    <div className="details-heading">
      <div className="details-name">
        <div className="top">
          <p>CLOTHING</p>
          <img src={HeartIcon} alt="Heart icon" />
          <h2>Ribbed Short-sleeved t-shirt</h2>
        </div>
        <div className="reviews">
          <div className="reviews-stars">
            <img src={FilledStar} alt="Stars icons" />
            <img src={FilledStar} alt="Stars icons" />
            <img src={FilledStar} alt="Stars icons" />
            <img src={FilledStar} alt="Stars icons" />
            <img src={EmptyStar} alt="Stars icons" />
          </div>
          <p>{review}</p>
        </div>
      </div>
      <div className="details-price">
        <h4>$68.00</h4>
        <p>
          The garments labelled as Committed are products that have been
          produced using sustainable fibres or processes, reducing their
          environmental impact.
        </p>
      </div>
    </div>
  );
}
