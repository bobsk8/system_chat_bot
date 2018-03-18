import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../service/app.service';
import { User } from '../../../model/user';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { environment } from '../../../../environments/environment';
import { Sale } from '../../../model/sale';
import { Modal } from '../../../model/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  photoURL: string = environment.photoURL;
  user: User = new User();
  products: Product[] = [];
  sale: Sale = new Sale();
  modalContent = new Modal();

  constructor(
    private productService: ProductService,
    private appService: AppService,
    private activeModal: NgbModal
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
      this.getSession();
      this.getProducts();
    });
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.products.forEach(prd1 => {
          this.sale.products.forEach(prd2 => {
            if (prd1.id === prd2.id) {
              prd1.selected = true;
            }
          });
        });
      }, err => console.log(err));
  }

  add(product: Product, modal: any) {
    if (this.sale.products.length > 0) {
      this.sale.products = this.sale.products.filter(p => p.id !== product.id);
    }
    this.addModal(modal);
    product.selected = true;
    this.sale.products.push(product);
    this.setSession();
  }

  addModal(modal: any) {
    this.modalContent.title = 'Adicionar produto';
    this.modalContent.body = 'Seu produto foi adicionado com sucesso ao carrinho';
    this.activeModal.open(modal).result
      .then(result => {
      });
  }

  remeveModal(modal: any) {
    this.modalContent.title = 'Remover produto';
    this.modalContent.body = 'Seu produto foi removido com sucesso do carrinho';
    this.activeModal.open(modal).result
      .then(result => {
      });
  }

  remove(product: Product, modal: any) {
    product.selected = false;
    this.sale.products = this.sale.products.filter(p => p.id !== product.id);
    this.remeveModal(modal);
    this.setSession();
  }

  setSession() {
    localStorage.clear();
    localStorage.setItem('productsCar', JSON.stringify(this.sale.products));
  }

  getSession() {
    if (localStorage.getItem('productsCar')) {
      this.sale.products = JSON.parse(localStorage.getItem('productsCar'));
    }
  }
}
