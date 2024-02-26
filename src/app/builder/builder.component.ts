import { Component } from '@angular/core';
import { FormioModule } from '@formio/angular';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [FormioModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  formJSON = { display: 'form', components: [] };

  handleFormChange(event:any){
    console.log(event);
  }
}
