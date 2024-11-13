import { Product } from '../types/Product';

export const getFilteredProducts = (
  items: Product[],
  sort: string,
  query: string,
) => {
  let filteredProducts = [...items];

  const normalizedQuery = query.trim().toLowerCase() || '';

  if (normalizedQuery) {
    filteredProducts = filteredProducts.filter(product => {
      const normalizedName = product.name.toLowerCase().trim();

      return normalizedName.includes(normalizedQuery);
    });
  }

  filteredProducts = filteredProducts.sort((currentProduct, nextProduct) => {
    switch (sort) {
      case 'newest':
        return nextProduct.year - currentProduct.year;

      case 'cheapest':
        return currentProduct.price - nextProduct.price;

      case 'alphabetically':
        return currentProduct.name.localeCompare(nextProduct.name);

      default:
        return 0;
    }
  });

  return filteredProducts;
};
