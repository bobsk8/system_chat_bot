import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../../../service/app.service';
import { Modal } from '../../../model/modal';
import { User } from '../../../model/user';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../model/product';
import { SaleService } from '../../../service/sale.service';

@Component({
  selector: 'app-user-buy',
  templateUrl: './user-buy.component.html',
  styleUrls: ['./user-buy.component.css']
})
export class UserBuyComponent implements OnInit {

  photoURL: string = environment.photoURL;
  user: User = new User();
  productsCar: Product[] = [];
  modalContent = new Modal();
  
  constructor(
    private activeModal: NgbModal,
    private appService: AppService,
    private saleService: SaleService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
      this.getSession();
    });
  }

  getSession(){
    if(localStorage.getItem('productsCar')){
      this.productsCar = JSON.parse(localStorage.getItem('productsCar'));
    }
  }

  remove(product: Product,modal: any){
    let idx = this.productsCar.indexOf(product);
    if(idx!=-1){
      this.productsCar.splice(idx,1);
    }
      this.modalContent.title = 'Remover produto'
      this.modalContent.body = 'Seu produto foi removido com sucesso do carrinho';
      this.activeModal.open(modal).result
        .then(result => {
        });
    this.setSession();
  }

  setSession(){
    localStorage.clear();
    localStorage.setItem('productsCar',JSON.stringify(this.productsCar));
  }

}
