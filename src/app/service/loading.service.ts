import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // private showLoading = new BehaviorSubject<boolean>(false);
  // loading$ = this.showLoading.asObservable();

  // show() {
  //   this.showLoading.next(true);
  // }

  // hide() {
  //   this.showLoading.next(false);
  // }

  // test
  private initialLoadSubject = new BehaviorSubject<boolean>(this.isInitialLoad());
  public initialLoad$ = this.initialLoadSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }

  setInitialLoadComplete() {
    this.initialLoadSubject.next(false);
  }

  private isInitialLoad(): boolean {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    return !hasVisitedBefore;
  }

  private markVisited() {
    localStorage.setItem('hasVisitedBefore', 'true');
  }

  constructor() {
    if (this.isInitialLoad()) {
      this.show();
      setTimeout(() => {
        this.hide();
        this.setInitialLoadComplete();
        this.markVisited();
      }, 1500);
    }
  }
}
