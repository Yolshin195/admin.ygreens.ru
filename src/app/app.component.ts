import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
  isMobail: boolean = false;

  constructor(public userServer: UserService, public breakpoint: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint.observe(['(min-width: 960px)']).subscribe(result => {
      console.log(result.matches);
      this.isMobail = !result.matches;
    })
  }

  onLogout(): void {
    this.userServer.logout(() => {});
  }
}
