import { Component } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
@Component({
  selector: 'app-genero',
  standalone: true,
  imports: [],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.css'
})
export class GeneroComponent {
  genero:any;
constructor(private peli:PeliculasService){}
ngOnInit(){
  this.cargargenero();
}
cargargenero(){
  this.peli.getgenero().subscribe({next:(dt:any)=>{
    this.genero=dt.genres;
       debugger
    
  },
  error:(e)=>{
    debugger
    console.log('error')
  }})

}
}
