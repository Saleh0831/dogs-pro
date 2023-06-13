import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { IndexComponent } from './home/index/index.component';
import { HeaderComponent } from './sit-bar/header/header.component';
import { FooterComponent } from './sit-bar/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { AboutStartComponent } from './home/about-start/about-start.component';
import { TopbarComponent } from './sit-bar/topbar/topbar.component';
import { ProductComponent } from './home/product/product.component';
import { OfferComponent } from './home/offer/offer.component';
import { TeamComponent } from './home/team/team.component';
import { HouseComponent } from './about/house/house.component';
import { AlbumComponent } from './galary/album/album.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BlogerComponent } from './blog/bloger/bloger.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxLoadingModule } from "ngx-loading";
import { ThemsComponent } from './galary/thems/thems.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigupComponent } from './authentication/sigup/sigup.component';
import { SiginComponent } from './authentication/sigin/sigin.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutStartComponent,
    TopbarComponent,
    ProductComponent,
    OfferComponent,
    TeamComponent,
    HouseComponent,
    AlbumComponent,
    BlogerComponent,
    ThemsComponent,
    SigupComponent,
    SiginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    NgxGalleryModule,
    HttpClientModule,
    NgxLoadingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
