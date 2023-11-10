import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';


@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    // Trigger initial load
    this.loadingService.show();
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      this.loadingService.hide();
      // Mark initial load as complete
      this.loadingService.setInitialLoadComplete();
    }, 2000); // Adjust the time according to your needs
  }
}
