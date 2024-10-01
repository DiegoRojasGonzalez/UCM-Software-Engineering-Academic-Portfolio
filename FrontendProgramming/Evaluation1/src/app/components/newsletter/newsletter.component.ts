import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  email: string = '';
  showModal: boolean = false;

  onSubmit() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
