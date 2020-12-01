import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  myArr:string[] = ["Gopala Fine Dine","Madras Cafe","Kamal Vihar", "Sai Shrishti", "Bhau's Hotel"];

  public getList(){
    return this.myArr;
  }
}
