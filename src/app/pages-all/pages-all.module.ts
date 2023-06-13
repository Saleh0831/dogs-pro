import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesAllRoutingModule } from './pages-all-routing.module';
import { SearchWikiComponent } from './search-wiki/search-wiki.component';

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SearchWikiComponent
  ],
  imports: [
    CommonModule,
    PagesAllRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesAllModule { }
