export default function List({ image, text }) {
  return (
    <div className="card">
      <img src={image} alt={`${text} images`} loading="lazy" />
      <p>{text}</p>
    </div>
  );
}
