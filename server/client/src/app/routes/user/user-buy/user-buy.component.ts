import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../../../service/app.service';
import { Modal } from '../../../model/modal';
import { User } from '../../../model/user';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../model/product';
import { SaleService } from '../../../service/sale.service';
import { Sale } from '../../../model/sale';

@Component({
  selector: 'app-user-buy',
  templateUrl: './user-buy.component.html',
  styleUrls: ['./user-buy.component.css']
})
export class UserBuyComponent implements OnInit {

  photoURL = environment.photoURL;
  user: User = new User();
  productsCar: Product[] = [];
  modalContent = new Modal();
  sale: Sale = new Sale();

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
      this.saleService.getAll()
        .subscribe(s => console.log(s));
    });
  }

  getSession() {
    if (localStorage.getItem('productsCar')) {
      this.productsCar = JSON.parse(localStorage.getItem('productsCar'));
      this.productsCar.forEach(p => {
        if (!p.quantity) {
          p.quantity = 1;
        }
      });
    }
  }

  add(product: Product) {
    product.quantity += +1;
    this.setSession();
  }

  remove(product: Product, modal: any) {
    if (product.quantity > 1) {
      product.quantity += -1;
    } else {
      this.productsCar = this.productsCar.filter(p => p.id !== product.id);
    }
    this.setSession();
  }

  openModal(modal: any) {
    this.modalContent.title = 'Finalização de Compra';
    this.modalContent.body = 'Seu compra foi finalizada com sucesso';
    this.activeModal.open(modal).result
      .then(result => {
        this.appService.redirect('/user/home');
      });
  }

  setSession() {
    localStorage.clear();
    localStorage.setItem('productsCar', JSON.stringify(this.productsCar));
  }

  buy(modal: any) {
    this.sale.products = this.productsCar;
    this.saleService.create(this.sale)
      .subscribe(s => {
        this.openModal(modal);
        localStorage.clear();
      });
  }

}
