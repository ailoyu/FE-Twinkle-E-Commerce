// import { Component } from '@angular/core';
import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';






@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent {
  onDragStart(event: DragEvent) {
    // Bắt đầu kéo - thiết lập loại dữ liệu bạn đang kéo
    event.dataTransfer?.setData('text', 'dragging');
  }

  onDragOver(event: DragEvent) {
    // Khi kéo qua phần tử
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    // Khi thả phần tử
    const data = event.dataTransfer?.getData('text');
    if (data === 'dragging') {
      // Thực hiện logic kéo slide ở đây
    }
  }
}