import { Component } from '@angular/core';
import { DatosComponent } from '../datos/datos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  datos=[
    {id:1,
    nombre:"jose",
   apellido:"miata",
   edad:'12'
},
{id:2,
  nombre:"carla",
 apellido:"miata",
 edad:'12'
},
{id:3,
  nombre:"maria",
 apellido:"miata",
 edad:'12'
}
  ]
}
