import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';

import { CategoriesService } from '../../services/categories.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  path:String = Path.url;
  categories:Object = null;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {

    /*==================================================
    Tomamos la data de las categorías
    ==================================================*/

    this.categoriesService.getData()
    .subscribe(resp => {

      this.categories = resp;

      console.log("categories ", this.categories);

    })

    /*==================================================
    Activamos el efecto toggle en el listado de subcategorías
    ==================================================*/

    $(document).on('click', ".sub-toggle", function() {

      $(this).parent().children('ul').toggle();

    })



  }

}
