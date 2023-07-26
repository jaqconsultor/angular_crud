import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tipoa',
  templateUrl: './listar-tipoa.component.html',
  styleUrls: ['./listar-tipoa.component.css']
})
export class ListarTipoaComponent implements OnInit {

  registros:any;

  constructor(
    private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router
  ) { 

    this.crudServicio.ListarTipoa().subscribe(
      respuesta=>{
      //console.log(respuesta);
      this.registros=respuesta;
       }
    )
  }

  ngOnInit(): void {
  }

}








