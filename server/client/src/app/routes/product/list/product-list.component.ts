import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../service/product.service";
import { Product } from "../../../model/product";
import { AppService } from "../../../service/app.service";
import { User } from "../../../model/user";
import * as FileSaver from 'file-saver';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GoogleService } from '../../../service/google.service';
import { environment } from '../../../../environments/environment';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../model/category';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  photoURL: string = environment.photoURL;
  products: Product[] = [];
  productUpdate: Product = new Product();
  user: User = new User();
  closeResult: string;
  categories: Category[] = [];
  msg: string = '';

  constructor(
    private productService: ProductService,
    private appService: AppService,
    private modalService: NgbModal,
    private categoryService: CategoryService,
    private googleService: GoogleService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login || data.role_id!=1) {
        this.appService.redirect('');
      }
      this.user = data;
      this.getCategory();
      this.getProducts();
    });    
  }

  getCategory(){
    this.categoryService.getAll()
    .subscribe(c => this.categories = c);
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products;
      }, err => console.log(err));
  }

  export() {
    this.productService.export()
      .subscribe(d => {
        this.downloadFile(d)
      })
  }

  setSheets() {
    this.googleService.setSheets(this.products)
      .subscribe(d => {
        alert('Foi')
      })
  }

  downloadFile(d) {
    let blob = d.blob();
    let filename = 'report.xlsx';
    FileSaver.saveAs(blob, filename);
  }

  open(content: any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  updateBtn(Product, contentUpdate) {
    Object.assign(this.productUpdate, Product);
    this.open(contentUpdate);
  }

  deleteBtn(product, content) {
    this.productService.delete(product)
      .subscribe(data => {
        this.msg = 'Excluido com sucesso!';
        this.open(content)
        this.getProducts();
      }, err => console.log(err))
  }

  update(content: any) {
    this.productService.update(this.productUpdate)
      .subscribe(data => {
        this.getProducts();
        this.productUpdate = new Product();
        this.msg = 'Alterado com sucesso!';
        this.open(content)
      }, err => console.log(err));
  }

  exclude(product: Product) {

  }

}
