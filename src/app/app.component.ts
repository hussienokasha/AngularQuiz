import { Component, inject } from '@angular/core';
import { LoaderService } from './Core/Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loader = inject(LoaderService);
constructor(){}

}
