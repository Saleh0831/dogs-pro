import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

import { DogsService } from 'src/app/services/dogs.service';
import { Subscription, map } from "rxjs";
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {
  private subscription1!: Subscription;
  private subscription2!: Subscription;

  public loading = true;
  constructor(private dogsService: DogsService) { }
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  imagesAPi: any;
  ngOnInit() {

    this.subscription1 = this.dogsService.getTenDogEmageRandom(12).pipe(
      map((res: any) => {

        for (let item of res.message) {

          this.galleryImages.push(
            {
              small: item,
              medium: item,
              big: item
            }
          )

        }
        this.loading = false;
      })

    ).subscribe()


    this.subscription2 = this.dogsService.getTenDogEmageRandom(30).pipe(
      map((res: any) => {
        this.imagesAPi = res.message;
      })
    ).subscribe()

    this.galleryOptions = [
      { "image": false, "height": "50rem", "thumbnailsRows": 4, "width": "60rem", "thumbnailsColumns": 3 },
      { "breakpoint": 1200, "thumbnailsRows": 3, "thumbnailsColumns": 2, "width": "50rem" },
      { "breakpoint": 768, "thumbnailsRows": 2, "thumbnailsColumns": 2, "width": "40rem" },
      { "breakpoint": 500, "thumbnailsRows": 1, "width": "70%", "height": "500px", "thumbnailsColumns": 1 },
    ]

    this.galleryImages = [];
  }


  images = [
    { url: 'img/gallery/1.jpg', alt: 'Image 1' },
    { url: 'img/gallery/2.jpg', alt: 'Image 2' },
    // ... ادامه دادن تصاویر دیگر
  ];
}

interface Photo {
  src: string;
  thumbnail: string;
  alt: string;
}