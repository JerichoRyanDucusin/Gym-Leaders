import { Component } from '@angular/core';
import { GymLeadersKantoRegion } from './gym-leaders-kanto-region/gym-leaders-kanto-region';
import { GymLeadersJohtoRegion } from './gym-leaders-johto-region/gym-leaders-johto-region';
import { NavbarComponent } from './navbar/navbar'; // FIXED: Lowercase path directory

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, GymLeadersKantoRegion, GymLeadersJohtoRegion], // FIXED: Aligned class name matching
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  // Main parent configuration shell context
}
