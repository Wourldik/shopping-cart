import { Review } from '../models';
import { ProductType } from '../enums';

export interface IProduct {
  descriptions: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rate: number;
  reviews: Review[];
  shortDesc: string;
  type: ProductType;
}
