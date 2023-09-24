import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-formatoa',
  templateUrl: './listar-formatoa.component.html',
  styleUrls: ['./listar-formatoa.component.css']
})
export class ListarFormatoaComponent implements OnInit {

  registros:any;

  constructor(private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router) {

    this.crudServicio.ListarFormatoa().subscribe(respuesta=>{
      //console.log(respuesta);
      this.registros=respuesta;

    });

  }

  ngOnInit(): void {
  }

  borrarRegistro( id: any, icontrol: any ) {
    this.crudServicio.BorrarFormatoa( id ).subscribe(
      respuesta=>{
        // this.ruta.navigateByUrl('/listar');
        this.registros.splice( icontrol, 1);
      }
    );

  }

}



























