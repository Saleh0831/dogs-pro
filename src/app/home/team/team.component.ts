import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  carouselOptions: OwlOptions = {
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

}
