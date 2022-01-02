import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Streamer } from 'src/app/clases/streamer';

@Component({
  selector: 'app-form-streamer',
  templateUrl: './form-streamer.component.html',
  styleUrls: ['./form-streamer.component.scss']
})
export class FormStreamerComponent implements OnInit {
 
  @Output() dataUsuario:EventEmitter<object>= new EventEmitter<object>()
  formStreamer:FormGroup
  fileToUpload: any = null;
  @ViewChild('inputGroupFile', {static: false})
  InputVar: ElementRef;


  formBase:FormGroup=new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellido:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    fecha_nacimiento:new FormControl('',[this.validateFechaNacimiento]),
    canal:new FormControl('',[Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    foto:new FormControl('',[Validators.required]),
    tag:new FormControl('',[Validators.required])
  })
  constructor(private fb:FormBuilder) { 
    this.formStreamer = this.fb.group({
      ...this.formBase.controls
    });
  }

  ngOnInit(): void {
  }

  guardarUsuario(){

    let objStreamer={
      nombre:this.formBase.getRawValue().nombre,
      apellido:this.formBase.getRawValue().apellido,
      email:this.formBase.getRawValue().email,
      tag:this.formBase.getRawValue().tag,
      foto:this.fileToUpload,
      estado:true,
    }
    if(this.formBase.getRawValue().fecha_nacimiento){
      Object.assign(objStreamer,{fecha_nacimiento: new Date(moment(this.formBase.getRawValue().fecha_nacimiento).toDate())})
    }
    this.dataUsuario.emit(objStreamer)
    this.formStreamer.reset();
    this.InputVar.nativeElement.value = "";
    
    
  }


  handleFileInput(files:any) {
    //const idElement=files.target.attributes.id.nodeValue
    const fileData=files.target.files.item(0)
    this.fileToUpload = fileData
    this.formBase.controls.foto.markAsTouched()
    if(fileData){
      if((fileData.size/1024)/1024 > 10){
        this.formBase.controls.foto.setErrors({require:true})
      }else{
        this.formBase.controls.foto.setErrors(null)
      }
    }
  }

  validateFechaNacimiento(control: AbstractControl):null |object {

    let fecha_form=moment(control.value)
    let fecha_actual=moment(new Date())
    let fecha_nacimiento=fecha_actual.diff(fecha_form, 'years'); 
    if(Number(fecha_nacimiento) < 13 || Number(fecha_nacimiento) > 99){
      return {mayor: true};
    }
    return null
  }

}
