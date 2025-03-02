import TestmonialsCard from "./TestmonialsCard.jsx";
import { testmonialData } from "../ProductInfo.js";

export default function Testmonials() {
  return (
    <section className="testmonials">
      <div className="testmonial-title">
        <h1>What People Are Saying</h1>
      </div>

      <div className="testomonials-article">
        <TestmonialsCard items={testmonialData[0]} />
        <TestmonialsCard items={testmonialData[1]} />
        <TestmonialsCard items={testmonialData[2]} />
      </div>

      <div className="dots">
        <button className="dot-btn selected"></button>
        <button className="dot-btn"></button>
        <button className="dot-btn"></button>
        <button className="dot-btn"></button>
      </div>
    </section>
  );
}
