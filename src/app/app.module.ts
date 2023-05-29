import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioReactComponent } from './componentes/formulario-react/formulario-react.component';
import { EjeMaterialComponent } from './componentes/eje-material/eje-material.component';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReactComponent,
    EjeMaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule //Para buscar en caja de texto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
