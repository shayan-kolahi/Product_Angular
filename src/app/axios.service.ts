import { Injectable } from '@angular/core';
import axios from "axios";
@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  axiosGet(e:any){
    axios.get('https://fakestoreapi.com/products').then((response) => {
      e.push(response.data)
    })
  }
}
