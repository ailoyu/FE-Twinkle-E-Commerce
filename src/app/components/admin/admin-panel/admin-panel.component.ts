// import { Component } from '@angular/core';
import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const slider = this.el.nativeElement.querySelector('.slider-main');

    this.renderer.setAttribute(slider, 'draggable', 'true');

    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
      isDragging = false;
    });
    
    slider.addEventListener('mouseup', () => {
      isDragging = false;
    });
    
    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Tốc độ kéo slide
      slider.scrollLeft = scrollLeft - walk;
    });    
  }


  
}