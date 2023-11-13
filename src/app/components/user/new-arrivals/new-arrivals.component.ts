import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { ElementRef, Renderer2 } from '@angular/core';



interface carouselImage {
  imageSrc: string;
  imageAlt: string;
  slideInterval?: number;
  objectPosition?: string; // Add this property
  contentType?: 'image' | 'video'; // Add this property
  videoSrc?: string; // Add this property to store video source
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
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
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
      imageSrc: './assets/videos/nike.mp4',
      imageAlt: 'nike1',
      slideInterval: 8000, // Set individual interval for this image
      objectPosition: '0px 60px',
      contentType: 'video',
      videoSrc: './assets/videos/nike.mp4', // Set the video source
    },
    {
      imageSrc: './assets/videos/converse.mp4',
      imageAlt: 'converse2',
      slideInterval: 10000, // Set individual interval for this image
      // objectPosition: '0px -40px',
      contentType: 'video',
      videoSrc: './assets/videos/converse.mp4', // Set the video source
    },
    {
      imageSrc: './assets/videos/adidas.mp4',
      imageAlt: 'adidas3',
      slideInterval: 10000, // Set individual interval for this image
      // objectPosition: '0px -40px',
      contentType: 'video',
      videoSrc: './assets/videos/adidas.mp4', // Set the video source
    },
    {
      imageSrc: './assets/videos/puma.mp4',
      imageAlt: 'puma4',
      slideInterval: 15000, // Set individual interval for this image
      // objectPosition: '0px -40px',
      contentType: 'video',
      videoSrc: './assets/videos/puma.mp4', // Set the video source
    },
    {
      imageSrc: './assets/videos/vans.mp4',
      imageAlt: 'vans5',
      slideInterval: 7700, // Set individual interval for this image
      // objectPosition: '0px -40px',
      contentType: 'video',
      videoSrc: './assets/videos/vans.mp4', // Set the video source
    },
  ];

  playVideo(index: number): void {
    const video = this.el.nativeElement.querySelectorAll('video')[index];
    if (video) {
      this.renderer.setProperty(video, 'muted', true); // Set muted property
      this.renderer.setProperty(video, 'autoplay', true); // Set autoplay property
      video.play();
    }
  }
}
