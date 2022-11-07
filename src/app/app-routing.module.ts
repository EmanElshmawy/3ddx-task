import { ProductsComponent } from './pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersResolver } from './guards/users.resolver';
import { ProductsResolver } from './guards/products.resolver';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'users',
  component: UsersComponent,
  resolve: {
    usersResolver: UsersResolver
  }
},
{
  path: 'products',
  component: ProductsComponent,
  resolve: {
    productsResolver: ProductsResolver
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
