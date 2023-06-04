import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-eje-material',
  templateUrl: './eje-material.component.html',
  styleUrls: ['./eje-material.component.css']
})
export class EjeMaterialComponent {

  //uso del model curso
  cursos: Curso[] = [
    {nombre: 'Angular', comision: '23194', profesor: 'Sebastian', fechaInicio: new Date(2023,7), fechaFin: new Date(2023,7), insAbierta: true},
    {nombre: 'React', comision: '28712', profesor: 'Alex', fechaInicio: new Date(2023,9), fechaFin: new Date(2023,9), insAbierta: true},
    {nombre: 'Node', comision: '23562', profesor: 'Jaime', fechaInicio: new Date(2023,8), fechaFin: new Date(2023,8), insAbierta: false},
    {nombre: 'JAVA', comision: '23221', profesor: 'Andres', fechaInicio: new Date(2023,5), fechaFin: new Date(2023,5), insAbierta: true}
  ];
  constructor(){}

  eventoBoton(){
    alert("Has echo click")
  }

}
