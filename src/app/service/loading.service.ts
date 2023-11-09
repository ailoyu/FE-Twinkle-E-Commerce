import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private showLoading = new BehaviorSubject<boolean>(false);
  loading$ = this.showLoading.asObservable();

  show() {
    this.showLoading.next(true);
  }

  hide() {
    this.showLoading.next(false);
  }

  constructor() { }
}
