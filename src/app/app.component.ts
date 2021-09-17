import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'admin-ygreens-ru';
  showFiller = false;

  constructor(public userServer: UserService) { }

  ngOnInit(): void {
    
  }

  onLogout(): void {
    this.userServer.logout(() => {});
  }
}
