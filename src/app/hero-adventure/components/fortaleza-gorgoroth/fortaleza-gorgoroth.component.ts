import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fortaleza-gorgoroth',
  templateUrl: './fortaleza-gorgoroth.component.html',
  styleUrls: ['./fortaleza-gorgoroth.component.scss']
})
export class FortalezaGorgorothComponent {
  @Output() choiceMade = new EventEmitter<string>();

  confront() {
    this.choiceMade.emit('Enfrentar Gorgoroth');
  }

  retreat() {
    this.choiceMade.emit('Tentar recuar');
  }
}
