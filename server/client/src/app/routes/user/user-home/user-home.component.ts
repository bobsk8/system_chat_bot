import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../service/app.service';
import { User } from '../../../model/user';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  photoURL: string = environment.photoURL;
  user: User = new User();
  products: Product[] = [];
  productsCar: Product[] = [];
  
  constructor(
    private productService: ProductService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
      this.getProducts();
      this.getSession();
    });
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products;
      }, err => console.log(err));
  }

  add(product: Product){    
    this.productsCar.push(product);
    this.setSession();    
  }

  remove(id: number){
    this.productsCar = this.productsCar.filter(p => p.id!=id);    
    this.setSession();
  }

  setSession(){
    localStorage.clear();
    localStorage.setItem('productsCar',JSON.stringify(this.productsCar));
  }

  getSession(){
    if(localStorage.getItem('productsCar')){
      this.productsCar = JSON.parse(localStorage.getItem('productsCar'));
    }
  }
}
