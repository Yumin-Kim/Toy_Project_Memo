export interface CategoryData {
  title: string;
  count: number;
  path: string;
}

export interface IuseParam {
  category: string;
  subcategory?: string;
  id?: string;
}
