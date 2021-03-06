import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../service/app.service';
import { ProductService } from '../../../service/product.service';
import { User } from '../../../model/user';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../model/product';
import { Modal } from '../../../model/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  photoURL: string = environment.photoURL;
  user: User = new User();
  products: Product[] = [];
  productsCar: Product[] = [];
  modalContent = new Modal();

  constructor(
    private productService: ProductService,
    private activeModal: NgbModal,
    private appService: AppService
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

  getSession() {
    if (localStorage.getItem('productsCar')) {
      this.productsCar = JSON.parse(localStorage.getItem('productsCar'));
    }
  }

  remove(product: Product, modal: any) {
    const idx = this.productsCar.indexOf(product);
    if (idx !== -1) {
      this.productsCar.splice(idx, 1);
    }
    this.modalContent.title = 'Remover produto';
    this.modalContent.body = 'Seu produto foi removido com sucesso do carrinho';
    this.activeModal.open(modal).result
      .then(result => {
      });
    this.setSession();
  }

  setSession() {
    localStorage.clear();
    localStorage.setItem('productsCar', JSON.stringify(this.productsCar));
  }

}
