import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticonService } from 'src/app/services/authenticon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthenticonService, private cookieService: CookieService) { }
  authen!: boolean;
  tess!: boolean;
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((res) => {

      this.tess = res;
    })
  }
  show: boolean = false


  onClick() {
    this.show = !this.show;
  }

  click2() {
    this.authService.logOutCook();
    this.authService.setCurrentUser(false);
  };

}

