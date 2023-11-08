import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

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
    this.refCursor.nativeElement.style.left = event.pageX  + "px";
    this.refCursor.nativeElement.style.top = event.pageY  + "px";
  }
}

