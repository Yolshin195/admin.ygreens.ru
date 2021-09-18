import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavToggleService } from './services/sidenav-toggle.service';
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
  @ViewChild('drawer') public drawer?: MatDrawer;

  constructor(public userServer: UserService, public breakpoint: BreakpointObserver, private sidenavToggle: SidenavToggleService) { }

  ngOnInit(): void {
    this.breakpoint.observe(['(min-width: 960px)']).subscribe(result => {
      console.log(result.matches);
      this.isMobail = !result.matches;
    })

    this.sidenavToggle.toggle$.subscribe(() => {
      this.drawer?.toggle();
    })
  }

  onLogout(): void {
    this.userServer.logout(() => {});
  }
}
