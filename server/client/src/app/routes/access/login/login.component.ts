import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { AppService } from '../../../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  public loading = false;

  constructor(
    private userService: UserService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (data.login && data.role_id === 1) {
        this.appService.redirect('/home');
      }
    });
  }

  login() {
    this.loading = true;
    this.userService.login(this.user)
      .subscribe(d => {
        if (d.login) {
          if (d.role_id === 1) {
            this.appService.redirect('/home');
          } else {
            this.appService.redirect('/user/home');
          }
        } else {
          alert('Login inválido');
        }
        this.loading = false;
      });
  }
}
