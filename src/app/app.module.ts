import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioReactComponent } from './componentes/formulario-react/formulario-react.component';
import { EjeMaterialComponent } from './componentes/eje-material/eje-material.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReactComponent,
    EjeMaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
