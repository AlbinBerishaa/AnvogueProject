import InstaImg1 from "../assets/images/instaImg-1.png";
import InstaImg2 from "../assets/images/instaImg-2.png";
import InstaImg3 from "../assets/images/instaImg-3.png";
import InstaImg4 from "../assets/images/instaImg-4.png";
import InstaImg5 from "../assets/images/instaImg-5.png";

export default function InstaSection() {
  return (
    <section className="insta-section">
      <div className="insta-headings">
        <h1>Anvogue On Instagram</h1>
        <p>#Anvougetheme</p>
      </div>

      <div className="instaImg-container">
        <img src={InstaImg1} alt="Instagram Images" loading="lazy" />
        <img src={InstaImg2} alt="Instagram Images" loading="lazy" />
        <img src={InstaImg3} alt="Instagram Images" loading="lazy" />
        <img src={InstaImg4} alt="Instagram Images" loading="lazy" />
        <img src={InstaImg5} alt="Instagram Images" loading="lazy" />
      </div>
    </section>
  );
}
