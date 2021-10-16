import { Component, OnInit } from '@angular/core';
import { Path } from '../../../config';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  path:String = Path.url;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

    let index = 0;

    this.productService.getData()
    .subscribe(resp => {

      /*==================================================
      Tomar la longitud del objeto
      ==================================================*/

      let i;
      let size = 0;

      for(i in resp) {

        size++

      }

      /*==================================================
      Generar un número aleatorio
      ==================================================*/

      if(size > 5) {

        index = Math.floor(Math.random() * (size - 5));

      }

      /*==================================================
      Seleccionar data de productos con límites
      ==================================================*/

      this.productService.getLimitData(Object.keys(resp)[index], 5)
      .subscribe(resp => {

        console.log("resp ", resp);


      })




    })
  }

}
