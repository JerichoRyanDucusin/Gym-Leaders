import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info';
LeaderInfoComponent

interface GymLeader {
  name: string;
  location: string;
  age: number;
  badge: string;
  emoji: string;
  motto: string;
  pokemonTeam: string[];
}

@Component({
  selector: 'app-gym-leaders-johto-region',
  standalone: true,
  imports: [LeaderInfoComponent], // Import the leader-info child component here
  templateUrl: './gym-leaders-johto-region.html',
  styleUrl: './gym-leaders-johto-region.css'
})
export class GymLeadersJohtoRegion {
  
  headlineMessage = signal('No monologue recorded yet.');

  GymLeaderJ = signal<GymLeader[]>([
    {
      name: 'Falkner', 
      location: 'Violet City', 
      age: 18, 
      badge: 'Zephyr Badge', 
      emoji: '🦅',
      motto: 'The magnificent wind will carry my birds to a soaring victory!',
      pokemonTeam: ['Pidgey (Lv. 7)', 'Pidgeotto (Lv. 9)']
    },
    {
      name: 'Bugsy', 
      location: 'Azalea Town', 
      age: 11, 
      badge: 'Hive Badge', 
      emoji: '🐞',
      motto: 'My deep bug research reveals your weak points perfectly!',
      pokemonTeam: ['Metapod (Lv. 14)', 'Kakuna (Lv. 14)', 'Scyther (Lv. 16)']
    },
    {
      name: 'Whitney', 
      location: 'Goldenrod City', 
      age: 16, 
      badge: 'Plain Badge', 
      emoji: '🥛',
      motto: 'Do not cry when my cute team completely runs over yours!',
      pokemonTeam: ['Clefairy (Lv. 18)', 'Miltank (Lv. 20)']
    },
    {
      name: 'Morty', 
      location: 'Ecruteak City', 
      age: 24, 
      badge: 'Fog Badge', 
      emoji: '👻',
      motto: 'My secret spectral vision can see right through your tactics!',
      pokemonTeam: ['Gastly (Lv. 21)', 'Haunter (Lv. 21)', 'Haunter (Lv. 23)', 'Gengar (Lv. 25)']
    },
    {
      name: 'Chuck', 
      location: 'Cianwood City', 
      age: 38, 
      badge: 'Storm Badge', 
      emoji: '🥊',
      motto: 'We smash through massive boulders every single day for training!',
      pokemonTeam: ['Primeape (Lv. 27)', 'Poliwrath (Lv. 30)']
    },
    {
      name: 'Jasmine', 
      location: 'Olivine City', 
      age: 17, 
      badge: 'Mineral Badge', 
      emoji: '⚙️',
      motto: 'Clad in a brilliant iron defense that never cracks!',
      pokemonTeam: ['Magnemite (Lv. 30)', 'Magnemite (Lv. 30)', 'Steelix (Lv. 35)']
    },
    {
      name: 'Pryce', 
      location: 'Mahogany Town', 
      age: 70, 
      badge: 'Glacier Badge', 
      emoji: '❄️',
      motto: 'Winter cold reveals your true inner determination!',
      pokemonTeam: ['Seel (Lv. 27)', 'Dewgong (Lv. 29)', 'Piloswine (Lv. 31)']
    },
    {
      name: 'Clair', 
      location: 'Blackthorn City', 
      age: 23, 
      badge: 'Rising Badge', 
      emoji: '🐉',
      motto: 'Face the absolute champion tier power of real mythical dragons!',
      pokemonTeam: ['Dragonair (Lv. 37)', 'Dragonair (Lv. 37)', 'Dragonair (Lv. 37)', 'Kingdra (Lv. 40)']
    }
  ]);

  handleMottoUpdate(leaderName: string, emittedMotto: string) {
    this.headlineMessage.set(`${leaderName} says: "${emittedMotto}"`);
  }
}
