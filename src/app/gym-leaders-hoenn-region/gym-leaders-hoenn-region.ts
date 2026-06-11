import { Component, signal, inject } from '@angular/core';
import { HoennGymLeadersService } from '../HoennGymLeader'; 
// 1. FIXED: Added the missing import for the leader-info component
import { LeaderInfoComponent } from '../leader-info/leader-info'; 

@Component({
  selector: 'app-gym-leaders-hoenn-region',
  standalone: true,
  // 2. FIXED: Added LeaderInfoComponent here so the HTML template can use the custom tag
  imports: [LeaderInfoComponent], 
  templateUrl:'./gym-leaders-hoenn-region.html',
  styleUrl: './gym-leaders-hoenn-region.css'
})
export class GymLeadersHoennRegion {
  public hoennService = inject(HoennGymLeadersService);
  
  GymLeaderH = this.hoennService.hoennLeaders;
  headlineMessage = signal('No monologue recorded yet.');

  handleMottoUpdate(leaderName: string, leaderMotto: string) {
    this.headlineMessage.set(`${leaderName} says: "${leaderMotto}"`);
  }
}
