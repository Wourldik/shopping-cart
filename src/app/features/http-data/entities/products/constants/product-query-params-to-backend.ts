import { IProductQueryParamsBackend } from '../interfaces';

export const productQueryParamsToBackend: {
  readonly [key: string]: keyof Required<IProductQueryParamsBackend>;
} = {
  pageSize: '_limit',
  pageIndex: '_page',
  rangeEnd: 'price_lte',
  rangeStart: 'price_gte',
  search: 'q',
  type: 'type',
};
