import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload/';

import { AppComponent } from './app.component';
import { ProductListComponent } from './routes/admin/product/list/product-list.component';
import { ProductService } from './service/product.service';
import { HomeComponent } from './routes/admin/home/home.component';
import { ProductCreateComponent } from './routes/admin/product/create/product-create.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { LoginComponent } from './routes/access/login/login.component';
import { AppService } from './service/app.service';
import { UserService } from './service/user.service';
import { UserCreateComponent } from './routes/user/create/user-create.component';
import { GoogleService } from './service/google.service';
import { SaleService } from './service/sale.service';
import { UploadService } from './service/upload.service';
import { CategoryService } from './service/category.service';
import { CategoryCreateComponent } from './routes/admin/category/category-create/category-create.component';
import { UserMenuComponent } from './components/user/user-menu/user-menu.component';
import { UserHomeComponent } from './routes/user/user-home/user-home.component';
import { ShoppingCartComponent } from './routes/user/shopping-cart/shopping-cart.component';
import { UserBuyComponent } from './routes/user/user-buy/user-buy.component';
import { UserShopComponent } from './routes/user/user-shop/user-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    ProductCreateComponent,
    MenuComponent,
    LoginComponent,
    UserCreateComponent,
    CategoryCreateComponent,
    UserMenuComponent,
    UserHomeComponent,
    ShoppingCartComponent,
    UserBuyComponent,
    UserShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    LoadingModule,
    FileUploadModule,
    NgbModule.forRoot()
  ],
  providers: [ProductService, UserService, AppService, GoogleService, UploadService, CategoryService, SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
