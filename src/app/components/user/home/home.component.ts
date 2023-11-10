import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material/dialog';
// import { LoadingService } from 'path-to-your-loading-service';
import { LoadingService } from 'src/app/service/loading.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // apiPrefix: string = "http://localhost:4200/";
  apiPrefix: string = "https://twinklee.netlify.app/";

  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12; // 10 items/ 1 trang
  keyword: string = "";
  selectedCategoryId: number = 0; // Giá trị category được chọn


  constructor(
    private productService: ProductService,
    private el: ElementRef,
    private router: Router,
    public loadingService: LoadingService, // Change private to public
  ) {}

  // ngOnInit(): void {
    
  // }

  onProductClick(productId: number) {
    debugger
    // Điều hướng đến trang detail-product với productId là tham số
    this.router.navigate(['/detail-product', productId]);
  }

  // code test phần animation-loading-page mỗi khi load trang home
  ngOnInit(): void {
    // Show loading animation when the component initializes
    this.loadingService.show();

    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      // Hide loading animation after the operation is complete
      this.loadingService.hide();
    }, 9000); // Adjust the time according to your needs
  }
}
