import { IProduct, IProductBackend } from '../interfaces';
import { Review } from './review';
import { ProductType } from '../enums';

export class Product implements IProduct {
  static fromBackendFactory(obj: Readonly<IProductBackend>): Product {
    return new Product({
      descriptions: obj.descriptions,
      shortDesc: obj.short_description,
      id: obj.id,
      image: obj.image,
      name: obj.name,
      price: obj.price,
      rate: obj.rate,
      type: obj.type,
      reviews: obj.reviews.map(review => Review.fromBackendFactory(review)),
    });
  }

  descriptions: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rate: number;
  reviews: Review[];
  shortDesc: string;
  type: ProductType;

  constructor(obj: Readonly<IProduct>) {
    this.descriptions = obj.descriptions;
    this.id = obj.id;
    this.type = obj.type;
    this.image = obj.image;
    this.name = obj.name;
    this.price = obj.price;
    this.rate = obj.rate;
    this.reviews = obj.reviews;
    this.shortDesc = obj.shortDesc;
  }
}

export type Products = ReadonlyArray<Product>;
