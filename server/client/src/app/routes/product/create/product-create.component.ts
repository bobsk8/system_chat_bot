import { Component, OnInit } from '@angular/core';
import { Product } from "../../../model/product";
import { ProductService } from "../../../service/product.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Modal } from "../../../model/modal";
import { AppService } from "../../../service/app.service";
import { User } from "../../../model/user";
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../model/category';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  modalContent = new Modal();
  user: User = new User();
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private activeModal: NgbModal,
    private appService: AppService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {      
      if (!data.login || data.role_id!=1) {        
        this.appService.redirect('');
      }      
      this.user = data;
      this.getCategory();            
    });
  }

  getCategory(){
    this.categoryService.getAll()
    .subscribe(c => this.categories = c);
  }

  submit(product,modal){
    this.productService.create(product)
    .subscribe(d => {
      this.modalContent.title = 'Salvo com sucesso!'
      this.modalContent.body = 'Seu produto pode ser visualizado na tela de Lista Produtos';
      this.activeModal.open(modal).result
        .then(result => {
          this.appService.redirect('/product/list');
        });
    });
  }

}
