import { IPage, IPageBackend } from '../interfaces';

export class Page<T> implements IPage<T> {
  static fromBackendFactory<T>(obj: Readonly<IPageBackend<T>>): Page<T> {
    return new Page<T>({
      items: obj.items,
      total: obj.total,
    });
  }

  readonly items: T[];
  readonly total: number;

  protected constructor(obj: Readonly<IPage<T>>) {
    this.items = obj.items;
    this.total = obj.total;
  }
}
