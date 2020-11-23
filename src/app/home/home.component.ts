import { Component, OnInit } from '@angular/core';
import { ProyectsService } from 'src/services/proyects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  proyects: any;
  constructor(private proyectsServ: ProyectsService) { 
    this.proyectsServ.proyectsData$.subscribe(prycts =>{
      console.log(prycts)
      this.proyects = prycts;
    })
  }

  ngOnInit() {
    this.proyectsServ.getproyects();
  }

}
