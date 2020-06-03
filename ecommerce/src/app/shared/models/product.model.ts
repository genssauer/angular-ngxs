import { CategoryModel } from './category.model';
import { FileModel } from './file.model';

export interface ProductModel {
  id?: number;
  title: string;
  description: string;
  price: number;
  status: boolean;
  category: CategoryModel;
  file: FileModel;
}
