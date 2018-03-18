import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Http } from '@angular/http';
import { ServiceModel } from '../model/service-model';

@Injectable()
export class CategoryService extends ServiceModel<Category> {

  constructor(
    http: Http
  ) {
    super('v1/categories', http);
  }

}
