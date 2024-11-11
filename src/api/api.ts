import { Accessory } from '../types/Accessory';
import { DeatailedProduct } from '../types/DetailedProduct';
import { Phone } from '../types/Phone';
import { Product } from '../types/Product';
import { Tablet } from '../types/Tablet';

const BASE_URL = './api';

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url + '.json';

  return fetch(fullURL).then(response => {
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    return response.json();
  });
}

export const getDetailedPhones = () => get<Phone[]>('/phones');
export const getDetailedTablets = () => get<Tablet[]>('/tablets');
export const getDetailedAccessories = () => get<Accessory[]>('/accessories');

export const getDetailedProduct = (catalog: string) =>
  get<DeatailedProduct[]>(`/${catalog}`);

export const getCatalogPhones = () => {
  return get<Product[]>('/products').then(products =>
    products.filter(product => product.category === 'phones'),
  );
};

export const getCatalogTablets = () => {
  return get<Product[]>('/products').then(products =>
    products.filter(product => product.category === 'tablets'),
  );
};

export const getCatalogAccessories = () => {
  return get<Product[]>('/products').then(products =>
    products.filter(product => product.category === 'accessories'),
  );
};

export const getAllProducts = (catalog: string) => {
  return get<Product[]>(`/${catalog}`);
};
