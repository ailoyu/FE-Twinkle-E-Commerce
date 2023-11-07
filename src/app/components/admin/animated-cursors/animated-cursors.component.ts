import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-cursors',
  templateUrl: './animated-cursors.component.html',
  styleUrls: ['./animated-cursors.component.scss']
})
export class AnimatedCursorsComponent {
  title = 'ngrxdemo';

  constructor(){}
  ngOnInit(){}

  @ViewChild('cursor') refCursor:any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event:any){
    console.log('width' + event.pageX);
    console.log('height' + event.pageY);
    this.refCursor.nativeElement.style.left = (event.pageX - 25) + "px";
    this.refCursor.nativeElement.style.top = (event.pageY - 25) + "px";
  }
}

// import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';

// interface Coords {
//   x: number;
//   y: number;
// }

// interface Circle {
//   x: number;
//   y: number;
//   style: {
//     left: string;
//     top: string;
//     backgroundColor: string;
//     scale?: number;
//   };
// }

// @Component({
//   selector: 'app-animated-cursors',
//   templateUrl: './animated-cursors.component.html',
//   styleUrls: ['./animated-cursors.component.scss']
// })

// export class AnimatedCursorsComponent implements OnInit, AfterViewInit {
//   coords: Coords = { x: 0, y: 0 };
//   circles: Circle[] = [];
//   colors: string[] = [
//     "#ffb56b",
//   "#fdaf69",
//   "#f89d63",
//   "#f59761",
//   "#ef865e",
//   "#ec805d",
//   "#e36e5c",
//   "#df685c",
//   "#d5585c",
//   "#d1525c",
//   "#c5415d",
//   "#c03b5d",
//   "#b22c5e",
//   "#ac265e",
//   "#9c155f",
//   "#950f5f",
//   "#830060",
//   "#7c0060",
//   "#680060",
//   "#60005f",
//   "#48005f",
//   "#3d005e"
//     // ... (other colors)
//   ];

//   constructor(private ngZone: NgZone) {}

//   ngOnInit() {}

//   ngAfterViewInit() {
//     this.circles = Array.from(document.querySelectorAll(".circle")).map((circle, index) => ({
//       x: 0,
//       y: 0,
//       style: {
//         left: '0px',
//         top: '0px',
//         backgroundColor: this.colors[index % this.colors.length]
//       }
//     }));

//     window.addEventListener("mousemove", (e) => {
//       this.coords.x = e.clientX;
//       this.coords.y = e.clientY;
//     });

//     this.animateCircles();
//   }

//   animateCircles() {
//     this.ngZone.runOutsideAngular(() => {
//       let x = this.coords.x;
//       let y = this.coords.y;

//       this.circles.forEach((circle, index) => {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.style.scale = (this.circles.length - index) / this.circles.length;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = index < this.circles.length - 1 ? this.circles[index + 1] : this.circles[0];
//         x += (nextCircle.x - x) * 0.3;
//         y += (nextCircle.y - y) * 0.3;
//       });

//       requestAnimationFrame(() => this.animateCircles());
//     });
//   }
// }



