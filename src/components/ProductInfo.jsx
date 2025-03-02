export default function ProductInfo({ sectionClass, cardClass, items }) {
  return (
    <section className={sectionClass}>
      {items.map((items, index) => {
        return (
          <div className={cardClass} key={index}>
            <img src={items.icon} alt="Icons" />
            <h4>{items.title}</h4>
            <p>{items.description}</p>
          </div>
        );
      })}
    </section>
  );
}
