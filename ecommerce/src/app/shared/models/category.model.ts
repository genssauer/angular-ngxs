export interface CategoryModel {
  id?: number;
  category_id: number;
  title: string;
  name: string;
  description: string;
  status: boolean;
  category: CategoryModel;
}
