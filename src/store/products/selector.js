export const selectFilter = (state) => state.products.filter;

export const selectProducts = (state) => {
  const filterQuery = state.products.filter.toLowerCase();
  return filterQuery === ""
    ? state.products.list
    : state.products.list.filter(
        (item) =>
          item.name.toLowerCase().includes(filterQuery) ||
          item.stock.toLowerCase().includes(filterQuery) ||
          item.description.toLowerCase().includes(filterQuery)
      );
};
