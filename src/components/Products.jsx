import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../store/products/selector';
import { getProductsOperation } from '../store/products/operations';
import Filter from './Filter';
import ProductCard from './ProductCard';

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsOperation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Filter />
      <ul className="card-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
