import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursosalumnos',
  templateUrl: './listar-cursosalumnos.component.html',
  styleUrls: ['./listar-cursosalumnos.component.css']
})
export class ListarCursosalumnosComponent implements OnInit {

  registros:any;

  constructor(
    private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router
  ) { 

    this.crudServicio.ListarAluC().subscribe(
      respuesta=>{
      //console.log(respuesta);
      this.registros=respuesta;
       }
    )
  }

  ngOnInit(): void {
  }

}


