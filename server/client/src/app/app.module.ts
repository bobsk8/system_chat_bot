import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoadingModule } from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload/';

import { AppComponent } from './app.component';
import { ProductListComponent } from './routes/product/list/product-list.component';
import { ProductService } from "./service/product.service";
import { HomeComponent } from './routes/home/home.component';
import { ProductCreateComponent } from './routes/product/create/product-create.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './routes/login/login.component';
import { AppService } from "./service/app.service";
import { UserService } from "./service/user.service";
import { UserCreateComponent } from './routes/user/create/user-create.component';
import { GoogleService } from './service/google.service';
import { UploadService } from './service/upload.service';
import { CategoryService } from './service/category.service';
import { CategoryCreateComponent } from './routes/category/category-create/category-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    ProductCreateComponent,
    MenuComponent,
    LoginComponent,
    UserCreateComponent,
    CategoryCreateComponent
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
  providers: [ProductService, UserService,AppService, GoogleService, UploadService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
