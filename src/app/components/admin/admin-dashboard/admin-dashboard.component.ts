import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Import Router

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  


  subMenuVisible = false;

  toggleSubMenu() {
    debugger
    this.subMenuVisible = !this.subMenuVisible;
  }

  subMenuVisible1 = false;

  toggleSubMenu1() {
    debugger
    this.subMenuVisible1 = !this.subMenuVisible1;
  }

  subMenuVisible2 = false;

  toggleSubMenu2() {
    debugger
    this.subMenuVisible2 = !this.subMenuVisible2;
  }

}
