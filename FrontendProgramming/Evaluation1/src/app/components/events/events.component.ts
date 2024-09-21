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
        'Las Fiestas Patrias son una celebración llena de orgullo y tradición que conmemora la independencia y la identidad de nuestro país. Durante esta festividad, disfrutamos de desfiles, música folclórica, danzas típicas y, por supuesto, la deliciosa gastronomía nacional. Es un momento para reunir a la familia y amigos, honrando nuestras raíces y celebrando la diversidad cultural que nos define. ¡Únete a la alegría de las Fiestas Patrias y vive la pasión chilena!',
    },
    {
      image:
        'https://cecinasllanquihue.cl/blog/wp-content/uploads/2021/09/shutterstock_311418290-scaled.jpg',
      title: 'Fiesta de la chilena ',
      year: '2024',
      month: 'SEPT',
      day: '18',
      description:
        'Ven a celebrar con nosotros la "Fiesta de la Chilenidad" en Curepto! Te invitamos a disfrutar de las Fiestas Patrias el próximo 18 de septiembre con un evento lleno de tradición, música, bailes típicos, juegos criollos y la mejor gastronomía chilena.',
    },
    {
      image:
        'https://th.bing.com/th/id/R.277700156358a78527eea9785d8082f8?rik=6MdnCkJq98fvgQ&riu=http%3a%2f%2fwww.diarioestrategia.cl%2fimages%2fshowid2%2f2003317%3fw%3d1200%26zc%3d4&ehk=SyVfwI%2fiSroL1PLeIjJi7GlNB5W6eMG8d42bZutCJws%3d&risl=&pid=ImgRaw&r=0-',
      title: 'Fiesta costumbrista de la nación ',
      year: '2024',
      month: 'SEPT',
      day: '19',
      description:
        'La Fiesta Costumbrista de la Nación es un vibrante evento que celebra la riqueza cultural y las tradiciones de nuestra comunidad. A través de música, danzas, gastronomía típica y artesanías locales, este encuentro invita a todos a disfrutar y compartir la herencia cultural que nos une. Únete a nosotros para revivir nuestras costumbres, celebrar nuestra identidad y fortalecer los lazos comunitarios. ¡Te esperamos para vivir una experiencia inolvidable!',
    },
  ];
}
