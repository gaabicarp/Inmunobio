import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetService } from 'src/app/services/get.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-nueva-distribuidora',
  templateUrl: './nueva-distribuidora.component.html',
  styleUrls: ['./nueva-distribuidora.component.css']
})
export class NuevaDistribuidoraComponent implements OnInit {
  @Input() element!: any;
  @Input() modo!: string;
  @Output() volviendo = new EventEmitter<number>();


  formDistribuidora!: FormGroup;
  estado: string;
  mensajeAlert: string;
  alert: boolean;

  constructor(private getService: GetService, private postService: PostService) { }

  ngOnInit(): void {
    this.alert = false;
    this.formDistribuidora = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      contacto: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      direccion: new FormControl('', [Validators.maxLength(50)]),
      cuit: new FormControl('', [Validators.maxLength(11)]),
      representante: new FormControl('', [Validators.maxLength(30)])
    });
    if (this.modo === 'EDITAR'){
      this.formDistribuidora.patchValue({
        nombre: this.element.nombre,
        contacto: this.element.contacto,
        direccion: this.element.direccion,
        cuit: this.element.cuit,
        representante: this.element.representante
      });
    }
  }

  crearDistribuidora(): void{
    console.log(this.element);
    const distribuidora : any = {
      nombre: this.formDistribuidora.value.nombre,
      contacto: this.formDistribuidora.value.contacto,
      direccion: this.formDistribuidora.value.direccion,
      cuit: this.formDistribuidora.value.cuit,
      representante: this.formDistribuidora.value.representante
    };
    if (this.modo === 'CREAR'){
      this.postService.crearDistribuidora(distribuidora).subscribe(res => {
        if (res.Status === 'ok'){
          this.alert = true;
          this.estado = 'success';
          this.mensajeAlert = 'La distribuidora fue creada correctamente';
          setTimeout(() => {
            this.volviendo.emit(0);
          }, 2000);
        }
        console.log(res);
      }, err => {
        this.alert = true;
        this.estado = 'danger';
        this.mensajeAlert = JSON.stringify(err.error.error);
      });
    } else {
      distribuidora.id_distribuidora = this.element.id_distribuidora
      this.postService.editarDistribuidora(distribuidora).subscribe(res => {
        if (res.Status === 'ok'){
          this.alert = true;
          this.estado = 'success';
          this.mensajeAlert = 'La información fue editada correctamente';
          setTimeout(() => {
            this.volviendo.emit(0);
          }, 2000);
        }
        console.log(res);
      }, err => {
        this.alert = true;
        this.estado = 'danger';
        this.mensajeAlert = JSON.stringify(err.error.error);
      });
    }
  }
  
  volver(): void{
    this.volviendo.emit(0);
  }

}
