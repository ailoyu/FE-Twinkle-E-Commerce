import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12; // 10 items/ 1 trang
  keyword: string = "";
  selectedCategoryId: number = 0; // Giá trị category được chọn


  constructor(private productService: ProductService,
    private el: ElementRef,
    private router: Router){}

  ngOnInit(): void {
  
  }

  

  onProductClick(productId: number) {
    debugger
    // Điều hướng đến trang detail-product với productId là tham số
    this.router.navigate(['/detail-product', productId]);
  }


  
  
}
