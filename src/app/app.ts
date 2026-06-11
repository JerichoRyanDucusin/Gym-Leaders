import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar'; // Clean path definition

@Component({
  selector: 'app-root',
  standalone: true,
  // FIXED: Simplified down to only import NavbarComponent since navbar.html handles the routing tree
  imports: [NavbarComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Main parent configuration shell context
}
