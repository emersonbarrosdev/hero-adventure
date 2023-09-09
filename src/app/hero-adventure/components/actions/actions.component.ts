import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  @Input() game: Game;
}
