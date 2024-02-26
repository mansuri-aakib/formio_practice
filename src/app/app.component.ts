import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioModule } from '@formio/angular';
import { BuilderComponent } from './builder/builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formio-practice';
  
}
