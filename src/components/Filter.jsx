import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/products/index.js';
import { selectFilter } from '../store/products/selector.js';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className="filter">
        Filter
        <input name="filter" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} />
      </label>
    </>
  );
}
