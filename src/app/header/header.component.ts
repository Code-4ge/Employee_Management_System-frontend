import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { AuthService } from '../Services/Authentication/auth.service';
// import { EventEmitter } from 'stream';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  show_btn:boolean=false;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.show_btn = this.authService.loggedIn();
  }

  SideNavToggle()
  {
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  Logout(){
    this.authService.logout();
  }

}

