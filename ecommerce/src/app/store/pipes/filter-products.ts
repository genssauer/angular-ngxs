import {Pipe, PipeTransform} from '@angular/core';

import { ProductModel } from '../../shared/models/product.model';

@Pipe({
  name: 'filterProducts'
})
export class FilterProducts implements PipeTransform {

  transform(products: ProductModel[], term: string): ProductModel[] {
    return products.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
