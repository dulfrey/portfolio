import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectsService } from 'src/services/proyects.service';

@Component({
  selector: 'app-product.details',
  templateUrl: './product.details.component.html',
  styleUrls: ['./product.details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  
  proyect: any;
  constructor(private route: ActivatedRoute,private proyectService: ProyectsService) {
    window.scroll(0,0);
    const id = this.route.snapshot.paramMap.get('id')
    console.log(this.route.snapshot.paramMap.get('id'));
    this.proyectService.getProyectById(id).then(value=>{
      console.log(value)
      this.proyect = value;
    }).catch(error=>{
      console.log(error)
    });
   }

  ngOnInit() {
    
  }

}
