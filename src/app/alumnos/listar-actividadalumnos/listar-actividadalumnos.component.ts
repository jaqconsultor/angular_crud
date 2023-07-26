import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-actividadalumnos',
  templateUrl: './listar-actividadalumnos.component.html',
  styleUrls: ['./listar-actividadalumnos.component.css']
})
export class ListarActividadalumnosComponent implements OnInit {

  registros:any;

  constructor(
    private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router
  ) { 

    this.crudServicio.ListarAluA().subscribe(
      respuesta=>{
      //console.log(respuesta);
      this.registros=respuesta;
       }
    )
  }


  ngOnInit(): void {
  }

}
