import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-toggle',
  templateUrl: './side-nav-toggle.component.html',
  styleUrls: ['./side-nav-toggle.component.scss']
})
export class SideNavToggleComponent implements OnInit {

  @Output() toggleNav: EventEmitter<boolean> = new EventEmitter();
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.toggleNav.emit(true);
  }

}
