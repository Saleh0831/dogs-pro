import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { HouseComponent } from './about/house/house.component';
import { AlbumComponent } from './galary/album/album.component';
import { BlogerComponent } from './blog/bloger/bloger.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'about',component:HouseComponent},
  {path:'galary',component:AlbumComponent},
  {path:'blog',component:BlogerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
