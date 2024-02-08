import { DatosComponent } from './datos/datos.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_02';

  numero = 10;

  peliculas=[
{
  id:1,
  name:"rambo",
  edad: 77
},
{
  id:2,
  name:"rambo 2",
  edad: 60
},
{
  id:3,
  name:"rambo 3",
  edad: 50
},
{
  id:4,
  name:"rambo 4",
  edad: 40
}
  ]

  
}
