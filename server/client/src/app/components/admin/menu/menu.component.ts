import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../service/user.service";
import { AppService } from "../../../service/app.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  selected:number = 1;
  
  constructor(
    private userService: UserService,
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.userService.logout()
    .subscribe(d => {
      if(d.success){
        this.appService.redirect('');
      }
    })
  }

  menu(item: number){
    if(item==1){
      this.selected = 1;
    }else if(item==2){      
      this.selected = 2;
    }else if(item==3){      
      this.selected = 3;
    }
  }

}
