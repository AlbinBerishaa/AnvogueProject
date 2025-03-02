export default function TestmonialsCard({ items }) {
  return (
    <div className="testmonial-card">
      <div className="stars">
        <img src={items.stars} alt="Rating Stars" />
      </div>
      <div className="testmonial-desciption">
        <h3>{items.title}</h3>
        <p>{items.description}</p>
      </div>
      <div className="testmonial-user">
        <h4>{items.user}</h4>
        <p>{items.date}</p>
      </div>
    </div>
  );
}
