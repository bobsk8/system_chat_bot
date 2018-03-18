import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { AppService } from '../../../service/app.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  selected = 1;
  products = 0;

  constructor(
    private userService: UserService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getSession();
  }

  logout() {
    this.userService.logout()
      .subscribe(d => {
        if (d.success) {
          this.appService.redirect('');
        }
      });
  }

  menu(item: number) {
    if (item === 1) {
      this.selected = 1;
    } else if (item === 2) {
      this.selected = 2;
    } else if (item === 3) {
      this.selected = 3;
    } else if (item === 4) {
      this.selected = 4;
    }
  }

  getSession() {
    if (localStorage.getItem('productsCar')) {
      this.products = JSON.parse(localStorage.getItem('productsCar')).length;
    }
  }
}
