import { Component, Input, OnInit } from '@angular/core';

interface CarouselImage {
  imageSrc: string;
  imageAlt: string;
  slideInterval?: number;
  objectPosition?: string; // Add this property
  contentType?: 'image' | 'video'; // Add this property
  videoSrc?: string; // Add this property to store video source
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
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

  imagesnicexu: CarouselImage[] = [
    {
      imageSrc: './assets/images/vans.gif',
      imageAlt: 'vans1',
      slideInterval: 2000, // Set individual interval for this image
      // objectPosition: '0px 0px',
    },
    {
      imageSrc: './assets/images/adidas.gif',
      imageAlt: 'adidas2',
      slideInterval: 5000, // Set individual interval for this image
      // objectPosition: '0px 0px',
    },
    {
      imageSrc: './assets/images/nike.gif',
      imageAlt: 'nike3',
      slideInterval: 1000, // Set individual interval for this image
      // objectPosition: '0px 0px',
    },
    {
      imageSrc: './assets/videos/converse.mp4',
      imageAlt: 'converse4',
      slideInterval: 4000, // Set individual interval for this image
      // objectPosition: '0px -40px',
      contentType: 'video',
      videoSrc: './assets/videos/converse.mp4', // Set the video source
    },
  ];
}
