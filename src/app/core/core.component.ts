import { CommonServicesService } from './services/common-services.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  navbarOpen = false;
  constructor(private services: CommonServicesService) {
  }

  ngOnInit() {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.services.setNavbarStatus(this.navbarOpen);

  }
}
