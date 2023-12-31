import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WikiService } from './services/wiki.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticonService } from './services/authenticon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookieValue:any;
  constructor(private cookieService: CookieService,private authService:AuthenticonService,private router:Router){
    this.cookieValue = this.cookieService.get('esohp-cookie');
  }
  ngOnInit(): void {
    if(this.cookieValue){
      this.authService.setCurrentUser(true);
    }

    
    
    
    
  }
/*   carouselOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
  teamMembers = [
    {
      fullName: 'Full Name 1',
      designation: 'Designation 1',
      image: 'assets/img/team-1.jpg'
    },
    {
      fullName: 'Full Name 2',
      designation: 'Designation 2',
      image: 'assets/img/team-3.jpg'
    },
    {
      fullName: 'Full Name 3',
      designation: 'Designation 3',
      image: 'assets/img/team-4.jpg'
    },
    {
      fullName: 'Full Name 4',
      designation: 'Designation 4',
      image: 'assets/img/team-5.jpg'
    }
  ];

  carouselOptions2 = {
    loop: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  }; */



}
