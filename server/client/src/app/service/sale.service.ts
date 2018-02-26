import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http } from '@angular/http';
import { Sale } from "../model/sale";

@Injectable()
export class SaleService extends ServiceModel<Sale> {

  constructor(
    http: Http
  ) {
    super('v1/sales', http);
  }

}
