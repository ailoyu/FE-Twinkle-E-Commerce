import { Component, HostListener, Injectable, OnInit } from '@angular/core';
import { LoginComponent } from '../../user/login/login.component';
import { TokenService } from 'src/app/service/token.service';
import { RegisterDTO } from 'src/app/dtos/user/register.dto';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/responses/user/login.response';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { VNPayService } from 'src/app/service/vnpay.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-10px)'
      })),
      transition('closed => open', [
        animate('200ms ease-out')
      ]),
      transition('open => closed', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {
  // Test coding for show/hide navigation when scrolling mouse
  navbarfixed:boolean = false;
  scrollDirection: string = 'none';


  @HostListener('window:scroll', ['$event'])
    onscroll(event: Event) {
      if (window.scrollY > 1500) {
        this.navbarfixed = false;
      } else {
        this.navbarfixed = true;
      }
    }


private lastScrollTop = 0;

@HostListener('window:scroll', ['$event'])
onScroll(event: Event) {
  const st = window.scrollY;
  if (st < this.lastScrollTop) {
    // Scroll up
    this.navbarfixed = true;
  } else {
    // Scroll down
    if (st > 800) {
      this.navbarfixed = false;
    }
  }
  this.lastScrollTop = st;
}


  constructor(private tokenService: TokenService,
    private userService: UserService,
    private cartService: CartService,
    private vnPayService: VNPayService,
    private router: Router){
    }
    

    user: any;
    userFromToken: any;
    
    loginResponse$!: Observable<LoginResponse> | null;
    loginResponse!: LoginResponse | null;
    


  ngOnInit(): void {
    debugger
    // this.loginResponse$ = this.tokenService.displayUserInformation();

    // this.loginResponse$?.subscribe(response => {
    //   this.loginResponse = { ...response };
    //   debugger
    // console.log(this.loginResponse);
    // });


    this.loginResponse = this.userService.getUserResponseFromLocalStorage();
    
  }

  showMenu: boolean = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.navbar')) {
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  

  signOut(){
    this.tokenService.removeToken();
    this.userService.removeUserFromLocalStorage();
    this.loginResponse = this.userService.getUserResponseFromLocalStorage();  
    this.cartService.clearCart();
    location.reload();
  }

  payment() {
    this.vnPayService.getPayment(10000, 2).subscribe({
      next: (response: string) => {
        debugger
        window.location.href = response;
      },
      error: (error) => {
        debugger
      },
    });
  }
}
