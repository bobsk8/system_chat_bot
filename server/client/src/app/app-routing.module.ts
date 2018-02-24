import { NgModule } from '@angular/core';
import { ProductListComponent } from "./routes/product/list/product-list.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./routes/home/home.component";
import { ProductCreateComponent } from "./routes/product/create/product-create.component";
import { LoginComponent } from "./routes/login/login.component";
import { UserCreateComponent } from "./routes/user/create/user-create.component";

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
      path: 'user',
      children: [        
        { path: 'create', component: UserCreateComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  