import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from './../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacePipe } from './../shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailGuard } from './product-detail.guard';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
      canActivate: [ProductDetailGuard], 
      component: ProductDetailComponent },
    ])
  ]
})
export class ProductModule { }
