import { NgModule } from '@angular/core';
import { ProductListComponent } from "./routes/admin/product/list/product-list.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./routes/admin/home/home.component";
import { ProductCreateComponent } from "./routes/admin/product/create/product-create.component";
import { LoginComponent } from "./routes/access/login/login.component";
import { UserCreateComponent } from "./routes/user/create/user-create.component";
import { CategoryCreateComponent } from './routes/admin/category/category-create/category-create.component';
import { UserHomeComponent } from './routes/user/user-home/user-home.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent},
    {
      path: 'product',
      children: [
        { path: 'list', component: ProductListComponent },
        { path: 'create', component: ProductCreateComponent }
      ]
    },
    {
      path: 'category',
      children: [        
        { path: 'create', component: CategoryCreateComponent }
      ]
    },
    {
      path: 'user',
      children: [        
        { path: 'create', component: UserCreateComponent },
        { path: 'home', component: UserHomeComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  