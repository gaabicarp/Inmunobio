import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postUsuario, Usuario } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) { }

  crearUsuario(nuevoUsuario: postUsuario): Observable<any>{
    const header = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.http.post<any>(this.API_URL + 'usuario', nuevoUsuario, {headers: header});
  }

  editarUsuario(usuario: postUsuario): Observable<any>{
    return this.http.put<any>(this.API_URL + 'usuario', usuario);
  }

  eliminarUsuario(id: number): Observable<any>{
    return this.http.delete<any>(this.API_URL + 'usuario/' + id );
  }

  crearGrupoTrabajo(grupoTrabajo: any): Observable<any>{
    return this.http.post<any>(this.API_URL + 'grupoDeTrabajo', grupoTrabajo);
  }

  editarGrupoTrabajo(grupoTrabajo: any): Observable<any>{
    return this.http.put<any>(this.API_URL + 'grupoDeTrabajo', grupoTrabajo);
  }

  editarJefeGrupo(grupoTrabajo: any): Observable<any>{
    return this.http.put<any>(this.API_URL + 'nuevoJefeDeGrupo', grupoTrabajo);
  }

  eliminarGrupoTrabajo(grupoTrabajo: number): Observable<any>{
    return this.http.delete<any>(this.API_URL + 'grupoDeTrabajo');
  }

  crearProyecto(proyecto: any): Observable<any>{
    return this.http.post<any>(this.API_URL + 'nuevoProyecto', proyecto);
  }

  crearExperimento(experimento: any): Observable<any>{
    return this.http.post<any>(this.API_URL + 'nuevoExperimento', experimento);
  }

  crearDistribuidora(nuevaDistribuidora: any): Observable<any>{
    return this.http.post<any>(this.API_URL + 'distribuidora', nuevaDistribuidora);
  }
  editarDistribuidora(distribuidora: any): Observable<any>{
    return this.http.put<any>(this.API_URL + 'distribuidora', distribuidora);
  }
  eliminarDistribuidora(id: number): Observable<any>{
    return this.http.delete<any>(this.API_URL + 'distribuidora/' + id);
  }

  crearProducto(nuevoProducto: any): Observable<any>{
    return this.http.post<any>(this.API_URL + 'producto', nuevoProducto);
  }
  editarProducto(producto: any): Observable<any>{
    return this.http.put<any>(this.API_URL + 'producto', producto);
  }
  eliminarProducto(id: number): Observable<any>{
    return this.http.delete<any>(this.API_URL + 'producto/' + id);
  }

  subirArchivo(file, id): Observable<string> {
    const formData = new FormData();
    formData.append('detallesTecnicos', file[0]);
    return this.http.post<any>(this.API_URL + 'producto/subirArchivo/' + id, formData);
  }

  crearEspacio(espacio: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'espacioFisico', espacio);
  }

  editarEspacio(espacio: any): Observable<any> {
    return this.http.put<any>(this.API_URL + 'espacioFisico', espacio);
  }

  crearJaula(jaula: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'nuevaJaula', jaula);
  }

  agregarStock(nuevoStock : any){
    return this.http.post<any>(this.API_URL + 'productoEnStock', nuevoStock);
  }
  editarStock(stock : any):Observable<any>{
    return this.http.put<any>(this.API_URL + 'productoEnStock', stock);
  }
  eliminarStock(id_productoEnStock: number, id_productos: number): Observable<any>{
    return this.http.delete<any>(this.API_URL + 'stock/' + id_productoEnStock + '/' + id_productos);
  }

  crearContenedor(nuevoContenedor : any): Observable<any>{
    return this.http.post<any>(this.API_URL + 'nuevoContenedor', nuevoContenedor);
  }
  editarContenedor(contenedor : any):Observable<any>{ // CREO QUE NO SE PUEDE MODIFICAR
    return this.http.put<any>(this.API_URL + '', contenedor);
  }
  crearAnimal(animal: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'nuevoAnimal', animal);
  }

  

  // crearStock(nuevoStock : any): Observable<any>{
  //   return this.http.post<any>(this.API_URL +'productoEnStock', nuevoStock)
  // }

}
