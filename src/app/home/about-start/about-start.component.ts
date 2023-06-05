import { Component, OnInit } from '@angular/core';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-about-start',
  templateUrl: './about-start.component.html',
  styleUrls: ['./about-start.component.scss']
})
export class AboutStartComponent implements OnInit {

  dataIndexDog: any;
  dataIndexWolf: any;

  corre: boolean = false

  changeDog() {
    this.corre = false
  }
  changeWolf() {
    this.corre = true
  }

  constructor(private wikiService: WikiService) { }
  ngOnInit(): void {
    this.wikiService.searchWikiPersion('گرگ').subscribe((res: any) => {
      
      
      let secondDotIndex = res.query.pages[14920].extract.indexOf(".", res.query.pages[14920].extract.indexOf(".") + 1);
      secondDotIndex = res.query.pages[14920].extract.indexOf(".", secondDotIndex + 1);
      let displayData = res.query.pages[14920].extract.slice(0, secondDotIndex)
      console.log(displayData);
      this.dataIndexWolf = displayData
      console.log(this.dataIndexWolf);
      
    });
    this.wikiService.searchWikiPersion('سگ').subscribe((res: any) => {
      let secondDotIndex = res.query.pages[15178].extract.indexOf(".", res.query.pages[15178].extract.indexOf(".") + 1);
      secondDotIndex = res.query.pages[15178].extract.indexOf(".", secondDotIndex + 1);
      let displayData = res.query.pages[15178].extract.slice(0, secondDotIndex)
      
      this.dataIndexDog = displayData;
    });
  }
}
