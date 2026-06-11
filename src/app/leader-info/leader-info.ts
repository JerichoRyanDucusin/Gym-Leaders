import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfoComponent {
  // Inputs passing data DOWN from parent components
  name = input.required<string>();
  age = input.required<number>();
  location = input.required<string>();
  badge = input.required<string>();
  emoji = input.required<string>();
  motto = input.required<string>();
  pokemonTeam = input.required<string[]>();

  // Output passing event data BACK UP to parent component
  mottoTriggered = output<string>();

  speakMonologue() {
    // Send the leader's specific monologue string upstream
    this.mottoTriggered.emit(this.motto());
  }
}
