import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { registro } from './registro';
import { cursos } from './cursos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  API: string ='http://localhost:8089/aulascursosya/agregar.php';
  APIC: string ='http://localhost:8089/aulascursosya/consultar.php';
  APIM: string ='http://localhost:8089/aulascursosya/modificar.php';
  APIE: string ='http://localhost:8089/aulascursosya/eliminar.php';
  APIL: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=empleados';

  APILTema: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=temas';
  APILTipoa: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=tipo_actividad';
  APILFormatoa: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=formato_archivo';
  APILCursos: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=cursos';
  APILActividades: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=actividades';
  APILGrupos: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=grupo';
  APILGruposA: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=grupoalumnos';
  APILUsers: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=users';
  APILAluA: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=actividaalumnos';
  APILAluC: string ='http://localhost:8089/aulascursosya/api.php?acc=scr' + '&tab' + '=cursosalumnos';

  
/*
  APILTema: string ='http://localhost/rest-ci3/crud/index/scr/temas';
  APILTipoa: string ='http://localhost/rest-ci3/crud/index/scr/tipo_actividad';
  APILFormatoa: string ='http://localhost/rest-ci3/crud/index/scr/formato_archivo';
  APILCursos: string ='http://localhost/rest-ci3/crud/index/scr/cursos';
  APILActividades: string ='http://localhost/rest-ci3/crud/index/scr/actividades';
  APILGrupos: string ='http://localhost/rest-ci3/crud/index/scr/grupo';
  APILGruposA: string ='http://localhost/rest-ci3/crud/index/scr/grupoalumnos';
  APILUsers: string ='http://localhost/rest-ci3/crud/index/scr/users';
  APILAluA: string ='http://localhost/rest-ci3/crud/index/scr/actividaalumnos';
  APILAluC: string ='http://localhost/rest-ci3/crud/index/scr/cursosalumnos';
*/
  //http://localhost/rest-ci3/crud/index/scr/users

  /*
  API: string ='http://localhost/empleados/agregar.php';
  APIC: string ='http://localhost/empleados/consultar.php';
  APIM: string ='http://localhost/empleados/modificar.php';
  APIE: string ='http://localhost/empleados/eliminar.php';
  APIL: string ='http://localhost/empleados/listar.php';
*/

  constructor( private clienteHTTP:HttpClient) { }

  ListarEmpleado():Observable<any> {
    return this.clienteHTTP.get(this.APIL);
  }

  AgregarEmpleado( datosRegistro:registro):Observable<any> {
    console.log( datosRegistro );
    return this.clienteHTTP.post(this.API,datosRegistro);
  }

  BorrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIE + "?id=" + id );
  }

  MostrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIC + "?id=" + id );
  }

  ModificarEmpleado( id:any, datosRegistro:registro):Observable<any> {
    //console.log( datosRegistro );
    return this.clienteHTTP.post(this.APIM + "?id=" + id,datosRegistro);
  }

  ListarTemas():Observable<any> {
    return this.clienteHTTP.get(this.APILTema);
  }

  ListarTipoa():Observable<any> {
    return this.clienteHTTP.get(this.APILTipoa);
  }

  ListarFormatoa():Observable<any> {
    return this.clienteHTTP.get(this.APILFormatoa);
  }

  ListarCursos():Observable<any> {
    return this.clienteHTTP.get(this.APILCursos);
  }

  ListarActividades():Observable<any> {
    return this.clienteHTTP.get(this.APILActividades);
  }

  ListarGrupos():Observable<any> {
    return this.clienteHTTP.get(this.APILGrupos);
  }

  ListarGruposA():Observable<any> {
    return this.clienteHTTP.get(this.APILGruposA);
  }

  ListarUsuarios():Observable<any> {
    return this.clienteHTTP.get(this.APILUsers);
  }

  ListarAluC():Observable<any> {
    return this.clienteHTTP.get(this.APILAluC);
  }

  ListarAluA():Observable<any> {
    return this.clienteHTTP.get(this.APILAluA);
  }

}

