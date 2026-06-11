import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info';


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
  selector: 'app-gym-leaders-kanto-region',
  standalone: true,
  imports: [LeaderInfoComponent], // MUST import the child component here
  templateUrl: './gym-leaders-kanto-region.html',
  styleUrl: './gym-leaders-kanto-region.css'
})
export class GymLeadersKantoRegion {
  
  headlineMessage = signal('No monologue recorded yet.');

  GymLeaderK = signal<GymLeader[]>([
    {
      name: 'Brock', location: 'Pewter City', age: 15, badge: 'Boulder Badge', emoji: '🧱',
      motto: 'My rock-hard willpower is stronger than any defense!',
      pokemonTeam: ['Geodude (Lv. 12)', 'Onix (Lv. 14)']
    },
    {
      name: 'Misty', location: 'Cerulean City', age: 12, badge: 'Cascade Badge', emoji: '💧',
      motto: 'Get ready to match my absolute watery power!',
      pokemonTeam: ['Staryu (Lv. 18)', 'Starmie (Lv. 21)']
    },
    {
      name: 'Lt. Surge', location: 'Vermilion City', age: 34, badge: 'Thunder Badge', emoji: '⚡',
      motto: 'You are stepping into a lightning-fast live wire zone!',
      pokemonTeam: ['Voltorb (Lv. 21)', 'Pikachu (Lv. 18)', 'Raichu (Lv. 24)']
    },
    {
      name: 'Erika', location: 'Celadon City', age: 19, badge: 'Rainbow Badge', emoji: '🌹',
      motto: 'Nature holds a quiet strength that blossoms in battle.',
      pokemonTeam: ['Victreebel (Lv. 29)', 'Tangela (Lv. 24)', 'Vileplume (Lv. 29)']
    },
    {
      name: 'Koga', location: 'Fuchsia City', age: 39, badge: 'Soul Badge', emoji: '☠️',
      motto: 'Despair in the shadows of my toxic ninja strategy!',
      pokemonTeam: ['Koffing (Lv. 37)', 'Muk (Lv. 39)', 'Koffing (Lv. 37)', 'Weezing (Lv. 43)']
    },
    {
      name: 'Sabrina', location: 'Saffron City', age: 21, badge: 'Marsh Badge', emoji: '👁️',
      motto: 'I foresaw your defeat long before you entered my gym.',
      pokemonTeam: ['Kadabra (Lv. 38)', 'Mr. Mime (Lv. 37)', 'Venomoth (Lv. 38)', 'Alakazam (Lv. 43)']
    },
    {
      name: 'Blaine', location: 'Cinnabar Island', age: 58, badge: 'Volcano Badge', emoji: '🔥',
      motto: 'You better have a Burn Heal ready for this scorching heat!',
      pokemonTeam: ['Growlithe (Lv. 42)', 'Ponyta (Lv. 40)', 'Rapidash (Lv. 42)', 'Arcanine (Lv. 47)']
    },
    {
      name: 'Giovanni', location: 'Viridian City', age: 44, badge: 'Earth Badge', emoji: '⛰️',
      motto: 'Welcome to the absolute ultimate playground of power!',
      pokemonTeam: ['Rhyhorn (Lv. 45)', 'Dugtrio (Lv. 42)', 'Nidoqueen (Lv. 44)', 'Nidoking (Lv. 45)', 'Rhydon (Lv. 50)']
    }
  ]);

  handleMottoUpdate(leaderName: string, emittedMotto: string) {
    this.headlineMessage.set(`${leaderName} says: "${emittedMotto}"`);
  }
}
