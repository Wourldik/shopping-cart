import { IProduct, IProductBackend } from '../interfaces';

export class Product implements IProduct {
  static fromBackendFactory(obj: Readonly<IProductBackend>): Product {
    return new Product({
      descriptions: obj.descriptions,
      id: obj.id,
      image: obj.image,
      name: obj.name,
      price: obj.price,
      rate: obj.rate,
      reviews: obj.reviews,
    });
  }

  descriptions: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rate: number;
  reviews: any[];

  constructor(obj: Readonly<IProduct>) {
    this.descriptions = obj.descriptions;
    this.id = obj.id;
    this.image = obj.image;
    this.name = obj.name;
    this.price = obj.price;
    this.rate = obj.rate;
    this.reviews = obj.reviews;
  }
}

export type Products = ReadonlyArray<Product>;
