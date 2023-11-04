import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDragEnd} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent {
  // nikeItems = [
  //   { image: './assets/images/shoes-1.jpg' },
  //   { image: './assets/images/shoes-2.jpg' },
  //   { image: './assets/images/shoes-3.jpg' },
  //   { image: './assets/images/shoes-4.jpg' },
  //   { image: './assets/images/shoes-5.jpg' },
  //   { image: './assets/images/shoes-6.jpg' },
  //   { image: './assets/images/shoes-7.jpg' },
  // ];

  // onDragStart(event: CdkDragEvent) {
  //   // Handle drag start logic
  // }

  // onDragEnd(event: CdkDragEvent) {
  //   // Handle drag end logic
  // }

  // onDrop(event: CdkDragDrop<any[]>) {
  //   // Handle drop logic here
  //   moveItemInArray(this.nikeItems, event.previousIndex, event.currentIndex);
  // }
}
