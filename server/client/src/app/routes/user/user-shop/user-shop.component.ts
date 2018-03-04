import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../service/app.service';
import { User } from '../../../model/user';
import { environment } from '../../../../environments/environment';
import { SaleService } from '../../../service/sale.service';
import { Sale } from '../../../model/sale';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-shop',
  templateUrl: './user-shop.component.html',
  styleUrls: ['./user-shop.component.css']
})
export class UserShopComponent implements OnInit {

  photoURL: string = environment.photoURL;
  user: User = new User();
  sales: Sale[] = [];
  
  constructor(
    private appService: AppService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
      this.getByUserId();            
    });
  }
  
  getByUserId(){
    this.userService.getByUserId()
      .subscribe(s => this.sales = s);
  }

}
