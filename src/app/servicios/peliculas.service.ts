import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient:HttpClient) { }
  getgenero(){
    return this.httpClient.get('https://api.themoviedb.org/3/genre/movie/list?api_key=43bb95cae941badc90476b9f10f04134&language=en-US');
  }
}
