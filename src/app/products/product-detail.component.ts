import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  imageWidth: number = 250;
  imageMargin: number = 2;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
    //console.log(this.route.snapshot.paramMap.get('id'));
  }


  ngOnInit(): void {
    //Lessons solution - has the undefined clause as well - more secure
    // const param = this.route.snapshot.paramMap.get('id');
    // getProduct(id: number): void {
    //   this.productService.getProduct(id).subscribe({
    //     next: product => this.product = product,
    //     error: err => this.errorMessage = err
    //   });
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.productService.getProducts().subscribe({
      next: products => {
        this.product = products.find(p => p.productId === id);
      },
      error: err => this.errorMessage = err
    });
    console.log(this.product);
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
