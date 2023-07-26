import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  cursos:any;

  constructor(
    private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router
  ) { 
    this.crudServicio.ListarCursos().subscribe(
      respuesta=>{
      //console.log(respuesta);
      this.cursos=respuesta;
       }
    )
  }

  ngOnInit(): void {
  }

}
