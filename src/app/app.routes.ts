import { Routes } from '@angular/router';
import { Home } from './home/home'; // FIXED: Added .component suffix and class name
import { GymLeadersKantoRegion } from './gym-leaders-kanto-region/gym-leaders-kanto-region';
import { GymLeadersJohtoRegion } from './gym-leaders-johto-region/gym-leaders-johto-region';
// FIXED: Added the file name suffix at the end of the folder path string
import { GymLeadersHoennRegion } from './gym-leaders-hoenn-region/gym-leaders-hoenn-region'; 

export const routes: Routes = [
  { path: 'home', component: Home }, // FIXED: Using HomeComponent class match
  { path: 'kanto', component: GymLeadersKantoRegion },
  { path: 'johto', component: GymLeadersJohtoRegion },
  { path: 'hoenn', component: GymLeadersHoennRegion },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
