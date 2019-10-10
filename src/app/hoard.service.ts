import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HoardService {

  constructor(private http: HttpClient) { 
  }

  getHoard(){
    return this.http.get('../../assets/hoard.json');
  }


}
