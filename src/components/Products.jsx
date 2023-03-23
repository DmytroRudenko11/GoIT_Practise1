import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { httpServer } from '../api/index';

export default function Products() {
  const authToken = useSelector(state => state.auth.authToken);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await httpServer.get('/product/all', {
          headers: { Authorization: authToken },
        });
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    authToken && fetch();
  }, []);

  return (
    <ul>
      {products.map(product => (
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
