import { Component, Input } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  @Input() gameService: GameService;
}
