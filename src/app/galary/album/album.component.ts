import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import PhotoSwipe from 'photoswipe';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  ngOnInit() {
    this.galleryOptions = [
      { "image": false, "height": "50rem","thumbnailsRows":4,"width":"60rem","thumbnailsColumns":3 },
      { "breakpoint": 1200,"thumbnailsRows":3,"thumbnailsColumns":2, "width": "50rem" },
      { "breakpoint": 768,"thumbnailsRows":2,"thumbnailsColumns":2, "width": "40rem" },
      { "breakpoint": 500,"thumbnailsRows":1, "width": "100%","thumbnailsColumns":1 },
      ]

    this.galleryImages = [
      {
        small: 'assets/img/gallery/1.jpg',
        medium: 'assets/img/gallery/1.jpg',
        big: 'assets/img/gallery/1.jpg'
      },
      {
        small: 'assets/img/gallery/2.jpg',
        medium: 'assets/img/gallery/2.jpg',
        big: 'assets/img/gallery/2.jpg'
      },
      {
        small: 'assets/img/gallery/3.jpg',
        medium: 'assets/img/gallery/3.jpg',
        big: 'assets/img/gallery/3.jpg'
      },{
        small: 'assets/img/gallery/4.jpg',
        medium: 'assets/img/gallery/4.jpg',
        big: 'assets/img/gallery/4.jpg'
      },
      {
        small: 'assets/img/gallery/5.jpg',
        medium: 'assets/img/gallery/5.jpg',
        big: 'assets/img/gallery/5.jpg'
      },
      {
        small: 'assets/img/gallery/12.jpg',
        medium: 'assets/img/gallery/12.jpg',
        big: 'assets/img/gallery/12.jpg'
      },
      {
        small: 'assets/img/gallery/5.jpg',
        medium: 'assets/img/gallery/5.jpg',
        big: 'assets/img/gallery/5.jpg'
      },
      {
        small: 'assets/img/gallery/6.jpg',
        medium: 'assets/img/gallery/6.jpg',
        big: 'assets/img/gallery/6.jpg'
      },
      {
        small: 'assets/img/gallery/7.jpg',
        medium: 'assets/img/gallery/7.jpg',
        big: 'assets/img/gallery/7.jpg'
      },
      {
        small: 'assets/img/gallery/8.jpg',
        medium: 'assets/img/gallery/8.jpg',
        big: 'assets/img/gallery/8.jpg'
      },
      {
        small: 'assets/img/gallery/9.jpg',
        medium: 'assets/img/gallery/9.jpg',
        big: 'assets/img/gallery/9.jpg'
      },
      {
        small: 'assets/img/gallery/10.jpg',
        medium: 'assets/img/gallery/10.jpg',
        big: 'assets/img/gallery/10.jpg'
      }
    ];
  }

/*   photos: Photo[] = [
    {
      src: 'assets/img/gallery/1.jpg',
      thumbnail: 'img/gallery/1.jpg',
      alt: 'Photo 1'
    },
    {
      src: 'assets/img/gallery/2.jpg',
      thumbnail: 'img/gallery/2.jpg',
      alt: 'Photo 2'
    },{
      src: 'assets/img/gallery/2.jpg',
      thumbnail: 'img/gallery/2.jpg',
      alt: 'Photo 2'
    },{
      src: 'assets/img/gallery/2.jpg',
      thumbnail: 'img/gallery/2.jpg',
      alt: 'Photo 2'
    },{
      src: 'assets/img/gallery/2.jpg',
      thumbnail: 'img/gallery/2.jpg',
      alt: 'Photo 2'
    },{
      src: 'assets/img/gallery/2.jpg',
      thumbnail: 'img/gallery/2.jpg',
      alt: 'Photo 2'
    },
    // ... ادامه دادن اطلاعات برای تصاویر دیگر
  ]; */
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