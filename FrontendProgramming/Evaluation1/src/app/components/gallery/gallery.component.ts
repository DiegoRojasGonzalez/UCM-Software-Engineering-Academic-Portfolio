import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  Images = [
    {
      url: 'http://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/DSC_9396.jpg',
    },
    {
      url: 'http://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/DSC_9220.jpg',
    },
    {
      url: 'http://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/DSC_2606.jpg',
    },
    { url: 'https://live.staticflickr.com/4528/38730256651_c417b91c7c_b.jpg' },
  ];
}
