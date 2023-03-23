import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../store/products/selector';
import { getProductsOperation } from '../store/products/operations';

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsOperation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}
