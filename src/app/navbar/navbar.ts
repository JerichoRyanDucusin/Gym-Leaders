import { Component } from '@angular/core';
// CRITICAL: Brings routing modules directly into the standalone navbar scope
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  // FIXED: Declared here so navbar.html can read routerLink and router-outlet
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  // Navigation layout controller logic
}
