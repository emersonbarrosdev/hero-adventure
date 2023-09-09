import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() hero: Character;
  @Input() enemy: Character;
  @Input() actionResults: string[] = [];


  @ViewChild('resultBox', { static: false }) resultBox: ElementRef;

  // Método para rolar a caixa de mensagens para baixo
  scrollToBottom() {
    setTimeout(() => {
      const resultBoxElement = this.resultBox.nativeElement;
      resultBoxElement.scrollTop = resultBoxElement.scrollHeight;
    });
  }
}
