import { Injectable, signal } from '@angular/core';

export interface HoennGymLeader {
  name: string;
  town: string;
  badge: string;
  specialty: string;
  emoji: string;
  motto: string;
  pokemonTeam: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HoennGymLeadersService {
  // FIXED: The open parenthesis stays here, and the data block closes correctly at the bottom
  private privateHoennLeaders = signal<HoennGymLeader[]>([
    {
      name: 'Roxanne', town: 'Rustboro City', badge: 'Stone Badge', specialty: 'Rock', emoji: '🪨',
      motto: 'I want to show you what I learned at the Pokémon Academy!',
      pokemonTeam: ['Geodude (Lv. 12)', 'Nosepass (Lv. 15)']
    },
    {
      name: 'Brawly', town: 'Dewford Town', badge: 'Knuckle Badge', specialty: 'Fighting', emoji: '🥊',
      motto: 'I’ve been surf-training in these rough waves! Fit to be crushed!',
      pokemonTeam: ['Machop (Lv. 16)', 'Makuhita (Lv. 19)']
    },
    {
      name: 'Wattson', town: 'Mauville City', badge: 'Dynamo Badge', specialty: 'Electric', emoji: '⚡',
      motto: 'Wahahahah! A healthy battle is just what brings joy to life!',
      pokemonTeam: ['Magnemite (Lv. 22)', 'Voltorb (Lv. 20)', 'Magneton (Lv. 23)']
    },
    {
      name: 'Flannery', town: 'Lavaridge Town', badge: 'Heat Badge', specialty: 'Fire', emoji: '🔥',
      motto: 'Don’t underestimate me just because I recently became a Leader!',
      pokemonTeam: ['Slugma (Lv. 26)', 'Slugma (Lv. 26)', 'Torkoal (Lv. 28)']
    },
    {
      name: 'Norman', town: 'Petalburg City', badge: 'Balance Badge', specialty: 'Normal', emoji: '🎯',
      motto: 'As a father and a Leader, I will give you everything I have got!',
      pokemonTeam: ['Slaking (Lv. 28)', 'Vigoroth (Lv. 30)', 'Slaking (Lv. 34)']
    },
    {
      name: 'Winona', town: 'Fortree City', badge: 'Feather Badge', specialty: 'Flying', emoji: '🪶',
      motto: 'Gracefully dancing in the sky, my bird Pokémon soar to victory!',
      pokemonTeam: ['Swellow (Lv. 31)', 'Pelipper (Lv. 30)', 'Skarmory (Lv. 32)', 'Altaria (Lv. 33)']
    },
    {
      name: 'Tate & Liza', town: 'Mossdeep City', badge: 'Mind Badge', specialty: 'Psychic', emoji: '👁️',
      motto: 'Our twin mind powers combine into an unbeatable combination!',
      pokemonTeam: ['Lunatone (Lv. 42)', 'Solrock (Lv. 42)']
    },
    {
      name: 'Wallace', town: 'Sootopolis City', badge: 'Rain Badge', specialty: 'Water', emoji: '💧',
      motto: 'Let us begin a marvelous illusion of elegant water choreography!',
      pokemonTeam: ['Luvdisc (Lv. 40)', 'Whiscash (Lv. 42)', 'Sealeo (Lv. 40)', 'Crawdaunt (Lv. 43)', 'Milotic (Lv. 43)']
    }
  ]); // FIXED: Closes the array matrix and signal function parameters cleanly here

  // Public read-only exposure stream matching your component configurations
  public hoennLeaders = this.privateHoennLeaders.asReadonly();
}
