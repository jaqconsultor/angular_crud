import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  registros:any;

title = "Titulo de Prueba";

  
body = "Cuerpo de Prueba";

  
 footer = "Pie de Pagia nde prueba";

 infoapi = "Waiting for...";

 mayus = "";
 resto = "";

  constructor(  private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router ) {

    this.crudServicio.ListarEmpleado().subscribe(respuesta=>{
        //console.log(respuesta);
        this.registros=respuesta;
    });

   }

  ngOnInit(): void {
  }


  capturarArchivo(event:any):any {
    const archivo = event.target.files[0]['name'];
    alert( archivo ) ;
    //console.log(event.target.files);
  }


  cambiartitulo() {
    this.title = "Titulo de Titulo Cambiado";
    this.title =    this.title.toUpperCase();
  }


  cambiarpie() {
    this.footer = "Titulo de Pie Cambiado";
    this.mayus = this.footer.substring(0, 1).toUpperCase();
    this.resto = this.footer.substring(1, this.footer.length).toLowerCase();
    this.footer = this.mayus.concat(this.resto.toString());
  }

  cambiarbody() {
    this.body = "Titulo de Titulo BODY Cambiado";
    
    this.body =this.body.toLowerCase();
  }


  llamarapi() {
    this.infoapi = "Llamado  API";
    this.infoapi = this.serviapi.llamarapi();
  }
  


  borrarRegistro( id: any, icontrol: any ) {
  
    this.crudServicio.BorrarEmpleado( id ).subscribe(
      respuesta=>{
       // this.ruta.navigateByUrl('/listar');
        this.registros.splice( icontrol, 1);
      }
    );

  }


}




