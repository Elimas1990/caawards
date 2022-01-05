import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.scss']
})
export class FormCategoriasComponent implements OnInit {

  formCategoria:FormGroup
  @Output() dataCategoria:EventEmitter<object>= new EventEmitter<object>()

  formBase:FormGroup=new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[])
  })
  constructor(private fb:FormBuilder) { 
    this.formCategoria = this.fb.group({
      ...this.formBase.controls
    });
  }


  ngOnInit(): void {
  }

  guardarCategoria(){
    let objCategoria=this.formBase.getRawValue()
    this.dataCategoria.emit(objCategoria)
    this.formCategoria.reset();
  }

}
