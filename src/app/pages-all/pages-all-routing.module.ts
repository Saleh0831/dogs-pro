import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchWikiComponent } from './search-wiki/search-wiki.component';

const routes: Routes = [
  {path:'',component:SearchWikiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAllRoutingModule { }
