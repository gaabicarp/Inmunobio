import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { GetService } from '../../../../services/get.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = [];
  distribuidoras = [];

  productoSeleccionado: any;
  step: number;
  modo: string;

  constructor(private getService: GetService, private postService: PostService) { }

  ngOnInit(): void {
    this.step = 0;
    this.getService.obtenerProductos().subscribe(res => {
      console.log(res)
      this.productos = res;
    });
    this.getService.obtenerDistribuidoras().subscribe(res => {
      console.log(res)
      this.distribuidoras = res;
    });
    
  }
  
  crear(){
    this.modo = 'CREAR';
    this.step = 1;
  }

  editar(producto: any): void {
    this.productoSeleccionado = producto;
    this.modo = 'EDITAR';
    this.step = 1;
  }

  eliminar(producto : any){
    this.postService.eliminarProducto(producto.id_producto).subscribe(res =>{
      console.log(res);
    })
  }

}
