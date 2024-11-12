import { Product } from '../types/Product';

export const getFilteredProducts = (items: Product[], sort: string) => {
  let filteredProducts = [...items];

  filteredProducts = filteredProducts.sort((currentProduct, nextProduct) => {
    switch (sort) {
      case 'newest':
        const currentYear = currentProduct.year ?? 0;
        const nextYear = nextProduct.year ?? 0;

        return nextYear - currentYear;

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
