import { DetailedProduct } from '../types/DetailedProduct';
import { Product } from '../types/Product';

export const convertToProductType = (product: DetailedProduct): Product => {
  return {
    id: product.id,
    category: product.category,
    itemId: product.id,
    name: product.name,
    image: product.images[0],
    price: product.priceDiscount,
    fullPrice: product.priceRegular,
    screen: product.screen,
    capacity: product.capacity,
    color: product.color,
    ram: product.ram,
  };
};
