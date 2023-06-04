import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{


    //uso del model curso
    cursos: Curso[] = [
      {nombre: 'Angular', comision: '23194', profesor: 'Sebastian', fechaInicio: new Date(2023, 7, 20), fechaFin: new Date(2023, 8, 25), insAbierta: false},
      {nombre: 'React', comision: '28712', profesor: 'Alex', fechaInicio: new Date(2023, 9, 25), fechaFin: new Date(2023, 10, 10), insAbierta: false},
      {nombre: 'Node', comision: '23562', profesor: 'Jaime', fechaInicio: new Date(2023, 8, 22), fechaFin: new Date(2023, 9, 25), insAbierta: false},
      {nombre: 'JAVA', comision: '23221', profesor: 'Andres', fechaInicio: new Date(2023, 5, 20), fechaFin: new Date(2023, 6, 30), insAbierta: false}
    ];
    columnas: string[] = 
    ['nombre', 'comision', 'profesor', 'fechaIncio','fechaFin','insAbierta', 'acciones'];

    //Al constructor que esta entre parentesis le enviamos this.curso
    dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
    
    constructor(){

    }

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    
    filtrar(event: Event){
      const ValorObtenido = (event.target as HTMLInputElement).value;
      //que el valor obteneido sea igual al filtro de los datos de la fuente
      this.dataSource.filter = ValorObtenido.trim();
      
    }

    filtrarCurso(){}

    filtrarComision(){}
}
