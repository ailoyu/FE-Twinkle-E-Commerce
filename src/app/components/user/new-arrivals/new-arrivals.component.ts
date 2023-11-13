import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';



interface carouselImage {
  imageSrc: string;
  imageAlt: string;
  slideInterval?: number;
  // objectPosition?: string; // Add this property
}

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit{

  categories: any[] =  [];
  bestSellers: any[] = [];
  newProducts: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ){
    this.getAllBestSellers();
    this.getNewProducts();
  }

  getNewProducts(){
    this.productService.getNewProducts().subscribe({
      next: (response: any) => {
        debugger
        this.newProducts = response;
        // for (let i = 0; i < this.products.length && i < this.imagesnicexu.length; i++) {
        //   this.imagesnicexu[i].imageSrc = this.products[i].thumbnail;
        // }
      },
      complete: () => {

      },
      error:(error: any) => {

      }
    })
  }

  onProductClick(productId: number) {
    debugger
    // Điều hướng đến trang detail-product với productId là tham số
    this.router.navigate(['/detail-product', productId]);
  }

  getAllBestSellers(){
    this.productService.getAllBestSellers().subscribe({
      next: (response: any) => {
        debugger
        this.bestSellers = response;
        // for (let i = 0; i < this.products.length && i < this.imagesnicexu.length; i++) {
        //   this.imagesnicexu[i].imageSrc = this.products[i].thumbnail;
        // }
      },
      complete: () => {

      },
      error:(error: any) => {

      }
    });
  }


  getCategories(){
    this.categoryService.getCategories().subscribe({
      next: (categories: any[]) => {
        debugger 
        this.categories = categories;
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        console.error("Lỗi bắt dữ liệu thể loại", error);
      }
    });
  }

  
  
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;

  selectedIndex = 0;
  private autoSlideInterval: any;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, this.getCurrentSlideInterval());
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
    clearInterval(this.autoSlideInterval);
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
    clearInterval(this.autoSlideInterval);
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    clearInterval(this.autoSlideInterval);
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  getCurrentSlideInterval(): number {
    const currentImage = this.images[this.selectedIndex];
    return currentImage?.slideInterval || 6000; // Default to 6 seconds if not specified
  }

  title = 'carousel';

  imagesnicexu: carouselImage[] = [
    {
      imageSrc: './assets/images/vans.gif',
      imageAlt: 'vans1',
      slideInterval: 5000, // Set individual interval for this image
    },
    {
      imageSrc: './assets/images/adidas.gif',
      imageAlt: 'adidas2',
      slideInterval: 9000, // Set individual interval for this image
    },
    {
      imageSrc: './assets/images/nike.gif',
      imageAlt: 'nike3',
      slideInterval: 4000, // Set individual interval for this image
    },
    {
      imageSrc: './assets/images/converse.gif',
      imageAlt: 'converse4',
      slideInterval: 3000, // Set individual interval for this image
      // objectPosition: '0px 20px',
    },
  ];
}
