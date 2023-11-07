import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  // isColorTableVisible: boolean = false;
  // @ViewChild('colorTable') colorTable!: ElementRef;

  // constructor() {}

  // ngOnInit() {
  //   // Không cần thực hiện bất kỳ thứ gì ở đây.
  // }

  // toggleColorTable() {
  //   this.isColorTableVisible = !this.isColorTableVisible;
  //   if (this.colorTable) {
  //     if (this.isColorTableVisible) {
  //       this.colorTable.nativeElement.style.display = 'block';
  //     } else {
  //       this.colorTable.nativeElement.style.display = 'none';
  //     }
  //   }
  // }
  isColorTableVisible: boolean = false;
  isColorTable2Visible: boolean = false;
  @ViewChild('colorTable') colorTable!: ElementRef;
  @ViewChild('colorTable2') colorTable2!: ElementRef;

  constructor() {}

  toggleColorTable() {
    this.isColorTableVisible = !this.isColorTableVisible;
    this.isColorTable2Visible = false;
    if (this.colorTable && this.colorTable2) {
      if (this.isColorTableVisible) {
        this.colorTable.nativeElement.style.display = 'block';
        this.colorTable2.nativeElement.style.display = 'none';
      } else {
        this.colorTable.nativeElement.style.display = 'none';
      }
    }
  }

  toggleColorTable2() {
    this.isColorTable2Visible = !this.isColorTable2Visible;
    this.isColorTableVisible = false;
    if (this.colorTable && this.colorTable2) {
      if (this.isColorTable2Visible) {
        this.colorTable2.nativeElement.style.display = 'block';
        this.colorTable.nativeElement.style.display = 'none';
      } else {
        this.colorTable2.nativeElement.style.display = 'none';
      }
    }
  }
}
