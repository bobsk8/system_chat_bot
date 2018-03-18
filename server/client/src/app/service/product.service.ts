import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http, ResponseContentType } from '@angular/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ProductService extends ServiceModel<Product> {

  constructor(
    http: Http
  ) {
    super('v1/products', http);
  }

  export(): Observable<ResponseContentType.Blob> {
    return this.http.get(this.apiEndpoint + '/export-products', { responseType: ResponseContentType.Blob })
      .catch(err => Observable.throw(err));
  }

}
