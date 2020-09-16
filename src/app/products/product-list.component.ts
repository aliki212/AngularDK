import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  styles: ["td {color:lightcoral;}"]
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List Title';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // listFilter: string = 'cast';
  private _listFilter: string;
  //_listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
  performFilter(filterby: string): IProduct[] {
    filterby = filterby.toLocaleLowerCase(); // comparing "apples to apples"
    return this.products.filter((product: IProduct) => //arrow function => filter for each p in products
      product.productName.toLocaleLowerCase().indexOf(filterby) !== -1); //ie: where indexOf finds a match (Mosh JSIntro 6.3 indexOf() = -1 if no match is found)
  }


  toggleImage(): void {
    this.showImage = !this.showImage
  }

  ngOnInit(): void {
    console.log("OnInit started");
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this._listFilter = ' ';
  }

}

