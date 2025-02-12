import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-spoiler',
  standalone: true,
  imports: [IonicModule],  
  templateUrl: './spoiler.component.html',
  styleUrls: ['./spoiler.component.scss']
})
export class SpoilerComponent {
  @Input() text: string = 'Hidden Spoiler Text';
  isRevealed = false;

  toggleSpoiler() {
    this.isRevealed = !this.isRevealed;
  }
}