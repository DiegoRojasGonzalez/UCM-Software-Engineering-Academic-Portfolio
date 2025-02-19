import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  @Input() email: string = '';
  isVisible = true;

  closeModal() {
    this.isVisible = false;
  }
}
