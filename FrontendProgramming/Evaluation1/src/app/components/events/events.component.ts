import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  Events = [
    {
      image:
        'https://th.bing.com/th/id/OIP.-oUaGANZgG9zdwoDe7K55gHaE7?rs=1&pid=ImgDetMain',
      title: 'Fiestas Patrias',
      year: '2024',
      month: 'SEPT',
      day: '17',
      description:
        'Ven a celebrar con nosotros la "Fiesta de la Chilenidad" en Curepto! Te invitamos a disfrutar de las Fiestas Patrias el próximo 18 de septiembre con un evento lleno de tradición, música, bailes típicos, juegos criollos y la mejor gastronomía chilena.',
    },
    {
      image:
        'https://th.bing.com/th/id/OIP.-oUaGANZgG9zdwoDe7K55gHaE7?rs=1&pid=ImgDetMain',
      title: 'Fiesta de la chilena ',
      year: '2024',
      month: 'SEPT',
      day: '18',
      description:
        'Ven a celebrar con nosotros la "Fiesta de la Chilenidad" en Curepto! Te invitamos a disfrutar de las Fiestas Patrias el próximo 18 de septiembre con un evento lleno de tradición, música, bailes típicos, juegos criollos y la mejor gastronomía chilena.',
    },
    {
      image:
        'https://th.bing.com/th/id/OIP.-oUaGANZgG9zdwoDe7K55gHaE7?rs=1&pid=ImgDetMain',
      title: 'Fiesta costumbrista de la nación ',
      year: '2024',
      month: 'SEPT',
      day: '19',
      description:
        'Ven a celebrar con nosotros la "Fiesta de la Chilenidad" en Curepto! Te invitamos a disfrutar de las Fiestas Patrias el próximo 18 de septiembre con un evento lleno de tradición, música, bailes típicos, juegos criollos y la mejor gastronomía chilena.',
    },
  ];
}
