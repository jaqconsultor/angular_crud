import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ListarComponent } from './componentes/listar/listar.component';

import { ListarTemasComponent } from './temas/listar-temas/listar-temas.component';
import { EditarTemasComponent } from './temas/editar-temas/editar-temas.component';
import { AgregarTemasComponent } from './temas/agregar-temas/agregar-temas.component'; 

import { ListarTipoaComponent } from './tipoa/listar-tipoa/listar-tipoa.component';
import { EditarTipoaComponent } from  './tipoa/editar-tipoa/editar-tipoa.component';
import { AgregarTipoaComponent } from './tipoa/agregar-tipoa/agregar-tipoa.component';

import { ListarFormatoaComponent } from './formatoa/listar-formatoa/listar-formatoa.component';
import { EditarFormatoaComponent } from  './formatoa/editar-formatoa/editar-formatoa.component';
import { AgregarFormatoaComponent } from './formatoa/agregar-formatoa/agregar-formatoa.component';

import { ListarCursosComponent } from './cursos/listar-cursos/listar-cursos.component';
import { EditarCursosComponent } from  './cursos/editar-cursos/editar-cursos.component';
import { AgregarCursosComponent } from './cursos/agregar-cursos/agregar-cursos.component';

import { ListarActividadesComponent } from './actividades/listar-actividades/listar-actividades.component';
import { EditarActividadesComponent } from  './actividades/editar-actividades/editar-actividades.component';
import { AgregarActividadesComponent } from './actividades/agregar-actividades/agregar-actividades.component';

import { ListarGruposComponent } from './grupos/listar-grupos/listar-grupos.component';
import { EditarGruposComponent } from  './grupos/editar-grupos/editar-grupos.component';
import { AgregarGruposComponent } from './grupos/agregar-grupos/agregar-grupos.component';

import { ListarGrupoalumnosComponent } from './grupoalumnos/listar-grupoalumnos/listar-grupoalumnos.component';
import { EditarGrupoalumnosComponent } from  './grupoalumnos/editar-grupoalumnos/editar-grupoalumnos.component';
import { AgregarGrupoalumnosComponent } from './grupoalumnos/agregar-grupoalumnos/agregar-grupoalumnos.component';

import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from  './usuarios/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';

import { ListarCursosalumnosComponent } from './alumnos/listar-cursosalumnos/listar-cursosalumnos.component';
import { EditarCursosalumnosComponent } from  './alumnos/editar-cursosalumnos/editar-cursosalumnos.component';
import { AgregarCursosalumnosComponent } from './alumnos/agregar-cursosalumnos/agregar-cursosalumnos.component';

import { ListarActividadalumnosComponent } from './alumnos/listar-actividadalumnos/listar-actividadalumnos.component';
import { EditarActividadalumnosComponent } from  './alumnos/editar-actividadalumnos/editar-actividadalumnos.component';
import { AgregarActividadalumnosComponent } from './alumnos/agregar-actividadalumnos/agregar-actividadalumnos.component';

import { LoginFormularioComponent } from './usuarios/login-formulario/login-formulario.component';


const routes: Routes = [

  //{path: '',pathMatch:'full',redirectTo:'loginusuario'},

  {path: 'loginusuario',component:LoginFormularioComponent},

  {path: 'agregar',component:AgregarComponent},
  {path: 'editar/:id',component:EditarComponent},
  {path: 'listar',component:ListarComponent},

  {path: 'agregartemas',component:AgregarTemasComponent},
  {path: 'editartemas/:id',component:EditarTemasComponent},
  {path: 'listartemas',component:ListarTemasComponent},

  {path: 'agregartipoa',component:AgregarTipoaComponent},
  {path: 'editartipoa/:id',component:EditarTipoaComponent},
  {path: 'listartipoa',component:ListarTipoaComponent},

  {path: 'agregarformatoa',component:AgregarFormatoaComponent},
  {path: 'editarformatoa/:id',component:EditarFormatoaComponent},
  {path: 'listarformatoa',component:ListarFormatoaComponent},

  {path: 'agregarcursos',component:AgregarCursosComponent},
  {path: 'editarcursos/:id',component:EditarCursosComponent},
  {path: 'listarcursos',component:ListarCursosComponent},

  {path: 'agregaractividades',component:AgregarActividadesComponent},
  {path: 'editaractividades/:id',component:EditarActividadesComponent},
  {path: 'listaractividades',component:ListarActividadesComponent},

  {path: 'agregargrupos',component:AgregarGruposComponent},
  {path: 'editargrupos/:id',component:EditarGruposComponent},
  {path: 'listargrupos',component:ListarGruposComponent},

  {path: 'agregargrupoalumnos',component:AgregarGrupoalumnosComponent},
  {path: 'editargrupoalumnos/:id',component:EditarGrupoalumnosComponent},
  {path: 'listargrupoalumnos',component:ListarGrupoalumnosComponent},

  {path: 'agregarusuarios',component:AgregarUsuariosComponent},
  {path: 'editarusuarios/:id',component:EditarUsuariosComponent},
  {path: 'listarusuarios',component:ListarUsuariosComponent},

  {path: 'agregarcalumnos',component:AgregarCursosalumnosComponent},
  {path: 'editarcalumnos/:id',component:EditarCursosalumnosComponent},
  {path: 'listarcalumnos',component:ListarCursosalumnosComponent},

  {path: 'agregaraalumnos',component:AgregarActividadalumnosComponent},
  {path: 'editaraalumnos/:id',component:EditarActividadalumnosComponent},
  {path: 'listaraalumnos',component:ListarActividadalumnosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
