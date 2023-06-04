import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioReactComponent } from './componentes/formulario-react/formulario-react.component';
import { EjeMaterialComponent } from './componentes/eje-material/eje-material.component';

import { TablaComponent } from './componentes/tabla/tabla.component';
import { MaterialModule } from './material.module';
import { BooleanatextoPipe } from './pipes/booleanatexto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReactComponent,
    EjeMaterialComponent,
    TablaComponent,
    BooleanatextoPipe,
    BooleanoEstiloDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule //guarda las imp de ang material

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
