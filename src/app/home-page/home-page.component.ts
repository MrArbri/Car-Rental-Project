import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  CarModels: Array<{model:string, year:number, img:string,fuel:string}> = [{
    model: "Audi A8",
    year: 2023,
    img: "https://cdn.motor1.com/images/mgl/8QMwo/s1/2022-audi-a8-l.webp",
    fuel: "Diesel",

  },{
    model: "Mercedes S Class",
    year: 2023,
    img: "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/e27b2279-28f5-4cfe-b012-f6d5ebf0a44a/Mercedes%20S-Class%202020%20%2810%29.jpg",
    fuel: "Diesel",

  },{
    model: "BMW 7 series",
    year: 2023,
    img: "https://www.topgear.com/sites/default/files/2023/08/P90492179_highRes_bmw-i7-xdrive60-m-sp%20%281%29.jpg",
    fuel: "Diesel",

  },{
    model: "VW Phaeton",
    year: 2023,
    img: "https://images.carexpert.com.au/crop/1200/630/app/uploads/2022/07/volkswagen-phaeton-d2-concept-1.jpg",
    fuel: "Diesel",

  },{
    model: "Mercedes E class",
    year: 2023,
    img: "https://cdni.autocarindia.com/ExtraImages/20230426012449_19.jpg",
    fuel: "Diesel",

  },{
    model: "BMW 5 series",
    year: 2023,
    img: "https://www.topgear.com/sites/default/files/cars-car/carousel/2020/10/p90404907_highres_bmw-m550i_0.jpg",
    fuel: "Diesel",

  },{
    model: "Audi A6",
    year: 2023,
    img: "https://i.i-sgcm.com/new_cars/cars/12423/12423_m.jpg",
    fuel: "Diesel",

  },{
    model: "VW Passat",
    year: 2023,
    img: "https://cdn-img.thethao247.vn/upload/2uannh.92/2019/08/16/bang-gia-xe-volkswagen-2019.jpg",
    fuel: "Diesel",

  },{
    model: "Mercedes C Class",
    year: 2023,
    img: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg",
    fuel: "Diesel",

  }]

}




