import { Component, OnInit } from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
})
export class ProductOneComponent implements OnInit {
  data:any = [];
  data_filter_1:any;
  data_filter_2:any;
  data_filter_3:any;
  data_filter_4:any;
  constructor(private AxiosService : AxiosService) { }

  ngOnInit(): void {
    this.AxiosService.axiosGet(this.data)
    console.log(this.data[0])

    setTimeout(() => {
      this.data_filter_1 = this.data[0].filter((e:any) => e.category == "men's clothing")
      this.data_filter_2 = this.data[0].filter((e:any) => e.category == "jewelery")
      this.data_filter_3 = this.data[0].filter((e:any) => e.category == "electronics")
      this.data_filter_4 = this.data[0].filter((e:any) => e.category == "women's clothing")
    },5000)

  }

}
