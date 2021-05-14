import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}
  title = 'crowe-project';

  isOpen = true;

  ngOnInit(): void {
    this.showToast();
  }

  navToggle($event): void {
    this.isOpen = !this.isOpen;
  }

  showToast() {
    this.toastr.warning('Please continue to finish the process', 'Notification!', {
      disableTimeOut: true,
      closeButton: true,
      positionClass: 'toast-bottom-center',
      toastClass: 'ngx-custom-toastr'
    });
  }

}
