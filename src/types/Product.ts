export interface Product {
  id: number | string;
  category: 'accessories' | 'phones' | 'tablets';
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year?: number;
  image: string;
}
