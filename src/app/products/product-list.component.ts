import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this._listFilter = ' ';
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
  }
}

