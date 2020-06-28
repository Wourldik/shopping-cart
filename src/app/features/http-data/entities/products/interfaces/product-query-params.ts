export interface IProductQueryParams {
  pageIndex?: number | null;
  pageSize?: number | null;
  price?:
    | {
        rangeEnd: number;
        rangeStart: number;
      }[]
    | null;
  search?: string;
  type?: string[] | null;
}
