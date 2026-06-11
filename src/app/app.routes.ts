import { Routes } from '@angular/router';
import { GymLeadersKantoRegion } from './gym-leaders-kanto-region/gym-leaders-kanto-region';
import { GymLeadersJohtoRegion } from './gym-leaders-johto-region/gym-leaders-johto-region';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'kanto', component: GymLeadersKantoRegion },
  { path: 'johto', component: GymLeadersJohtoRegion },
  // Default path redirect rule
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Wildcard path fallback to protect against broken links
  { path: '**', redirectTo: 'home' }
];
