import { IReviewBackend } from './review-backend';
import { ProductType } from '../enums';

export interface IProductBackend {
  descriptions: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rate: number;
  reviews: IReviewBackend[];
  short_description: string;
  type: ProductType;
}
