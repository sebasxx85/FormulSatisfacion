import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-eje-material',
  templateUrl: './eje-material.component.html',
  styleUrls: ['./eje-material.component.css']
})
export class EjeMaterialComponent {

  //uso del model curso
  Cursos: Curso[] = [
    {nombre: 'Angular', comision: '23194', profesor: 'Sebastian'},
    {nombre: 'React', comision: '28712', profesor: 'Alex'},
    {nombre: 'Node', comision: '23562', profesor: 'Jaime'},
    {nombre: 'JAVA', comision: '23221', profesor: 'Andres'}
  ];

  constructor(){}

  eventoBoton(){
    alert("Has echo click")
  }

}
