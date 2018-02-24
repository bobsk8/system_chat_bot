import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http } from '@angular/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GoogleService extends ServiceModel<Product> {

  constructor(
    http: Http
  ) {
    super('v1/google', http);
  }

  setSheets(datas: Product[]): Observable<any> {
    return this.http.post(this.apiEndpoint + '/set-datas',datas, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  getSheets(): Observable<any> {
    return this.http.get(this.apiEndpoint, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

}
