export interface IFilterFormValue {
  price?: {
    rangeEnd: number;
    rangeStart: number;
  }[];
  search?: string;
  type?: string[];
}
