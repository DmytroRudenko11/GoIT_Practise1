import { useDispatch } from 'react-redux';
import { deleteProductOperation } from '../store/products/operations';

const ProductCard = ({ product }) => {
  const { id, name, price, stock, description } = product;

  const dispatch = useDispatch();
  return (
    <li className="card-item">
      <h3 className="card-title">{name}</h3>
      <p className="card-price">Price: {price}</p>
      <p className="card-stock">Stock: {stock}</p>
      <p className="card-description">{description}</p>
      <button
        className="card-btn"
        type="button"
        onClick={() => dispatch(deleteProductOperation(id))}
      >
        Delete
      </button>
    </li>
  );
};
export default ProductCard;
