import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './home/categorias/categorias.component';
import { ListaNominadosComponent } from './home/lista-nominados/lista-nominados.component';
import { NominadosComponent } from './nominados/nominados.component';
import { FormStreamerComponent } from './nominados/form-streamer/form-streamer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormNominadosComponent } from './nominados/form-nominados/form-nominados.component';
import { StreamerTagFilterPipe } from '../pipes/streamer-tag-filter.pipe';
import { TernasComponent } from './nominados/form-nominados/ternas/ternas.component';
import { StreamersComponent } from './nominados/form-nominados/streamers/streamers.component';
import { StreamerSortPipe } from '../pipes/streamer-sort.pipe';
import { SelectAnioComponent } from './home/select-anio/select-anio.component';
import { SelectCategoriaComponent } from './home/select-categoria/select-categoria.component';



@NgModule({
  declarations: [
    HomeComponent,
    CategoriasComponent,
    ListaNominadosComponent,
    NominadosComponent,
    FormStreamerComponent,
    FormNominadosComponent,
    StreamerTagFilterPipe,
    StreamerSortPipe,
    TernasComponent,
    StreamersComponent,
    SelectAnioComponent,
    SelectCategoriaComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PageModule { }
