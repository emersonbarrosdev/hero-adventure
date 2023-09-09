import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-montanhas-sombrias-d',
  templateUrl: './montanhas-sombrias-d.component.html',
  styleUrls: ['./montanhas-sombrias-d.component.scss']
})
export class MontanhasSombriasDComponent {
  @Output() choiceMade = new EventEmitter<string>();
}
