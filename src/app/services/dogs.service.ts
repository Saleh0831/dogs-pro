import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http:HttpClient) { }


  getTenDogEmageRandom(){
   return this.http.get('https://dog.ceo/api/breeds/image/random/10');
  }
}
