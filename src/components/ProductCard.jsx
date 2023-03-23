const ProductCard = ({ product }) => {
  const { name, price, stock, description } = product;
  return (
    <li className="card-item">
      <h3 className="card-title">{name}</h3>
      <p className="card-price">Price: {price}</p>
      <p className="card-stock">Stock: {stock}</p>
      <p className="card-description">{description}</p>
      <button className="card-btn" type="button">
        Delete
      </button>
    </li>
  );
};
export default ProductCard;
