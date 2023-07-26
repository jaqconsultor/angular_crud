import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent implements OnInit {

  actividades:any;

  constructor(
    private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router
  ) { 
    this.crudServicio.ListarActividades().subscribe(
      respuesta=>{
      //console.log(respuesta);
      this.actividades=respuesta;
       }
    )
  }

  ngOnInit(): void {
  }

}
