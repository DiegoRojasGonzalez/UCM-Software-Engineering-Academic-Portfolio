import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private hardcodedObjects = [
    {
      id: 1,
      name: 'Alcaldía',
      description: 'Encargada de la administración general del municipio',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/Alcalde.jpg',
      contacts: [
        {
          Cargo: 'Alcalde',
          Nombre: 'René Concha González',
          Correo: 'alcalde@curepto.cl',
          Fono: '752-552302',
        },
        {
          Cargo: 'Secretaria de Alcaldía',
          Nombre: 'Paulina Pacheco Trecanao',
          Correo: 'secretaria-alcalde@curepto.cl',
          Fono: '752-552309',
        },
        {
          Cargo: 'Enc. de Seguridad Pública y de Comunicaciones',
          Nombre: 'Daniela Montero Avilés',
          Correo: 'dmontero@curepto.cl',
          Fono: '752-552375',
        },
        {
          Cargo: 'Encargada de Biblioteca Municipal',
          Nombre: 'Verónica Covarrubias Araya',
          Correo: 'vcovarrubias@curepto.cl',
          Fono: '752-552336',
        },
      ],
    },
    {
      id: 2,
      name: 'Secretaría',
      description: 'Encargada de la administración general del municipio',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/Secretar%C3%ADa.jpg',
      contacts: [
        {
          Cargo: 'Secretario Municipal',
          Nombre: 'Luis Navarro Reyes',
          Correo: 'secretario@curepto.cl',
          Fono: '752-552303',
        },
        {
          Cargo: 'Técnico del Concejo Municipal',
          Nombre: 'Mónica Avendaño Avendaño',
          Correo: 'concejo@curepto.cl',
          Fono: '752-552327',
        },
        {
          Cargo: 'Encargado OIRS y Partes',
          Nombre: 'Walter Zencovich Letter',
          Correo: 'opartes@curepto.cl',
          Fono: '752-552308',
        },
      ],
    },
    {
      id: 3,
      name: 'Oficina Partes (OIRS)',
      description: 'Encargada de la administración general del municipio',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/DSC_2671.jpg',
      contacts: [
        {
          Cargo: 'Encargado Oficina Partes	',
          Nombre: 'Walter Zencovich Letter	',
          Correo: 'opartes@curepto.cl',
          Fono: '752-552308',
        },
      ],
    },
    {
      id: 4,
      name: 'Finanzas',
      description: 'Encargada de la administración general del municipio',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/Finanzas.jpg',
      contacts: [
        {
          Cargo: 'Director Administración y Finanzas',
          Nombre: 'Javier Vargas Elgueta',
          Correo: 'finanzas@curepto.cl',
          Fono: '752-552330',
        },
        {
          Cargo: 'Encargado Adquisiciones y Contratos Municipal',
          Nombre: 'Juan F. Rojas Saavedra',
          Correo: 'adquisiciones@curepto.cl',
          Fono: '752-552310',
        },
        {
          Cargo: 'Secretaria de administración y finanzas',
          Nombre: 'Rosa Acevedo Valdés',
          Correo: 'secredaf@curepto.cl',
          Fono: '752-552310',
        },
        {
          Cargo: 'Profesional de administración y finanzas',
          Nombre: 'Sergio González Mejías',
          Correo: 'nicsp@curepto.cl',
          Fono: '752-552350',
        },
        {
          Cargo: 'Tesorera Municipal',
          Nombre: 'Ma. Isabel Peredo Reyes',
          Correo: 'tesoreria@curepto.cl',
          Fono: '752-552320',
        },
        {
          Cargo: 'Cajero tesorería Municipal',
          Nombre: 'Cristian Abud Valenzuela',
          Correo: 'cabud@curepto.cl',
          Fono: '752-552320',
        },
        {
          Cargo: 'Jefe de Contabilidad',
          Nombre: 'Alejandro Escobar Bustos',
          Correo: 'contabilidad@curepto.cl',
          Fono: '752-552304',
        },
        {
          Cargo: 'Encargado de Inventario Bodega',
          Nombre: 'José Andrades Díaz',
          Correo: 'inventarios@curepto.cl',
          Fono: '752-552318',
        },
      ],
    },
    {
      id: 5,
      name: 'Tesorería',
      description: 'Encargada de la administración general del municipio',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/Tesorer%C3%ADa.jpg',
      contacts: [
        {
          Cargo: 'Tesorera Municipal',
          Nombre: 'Ma. Isabel Peredo Reyes',
          Correo: 'tesoreria@curepto.cl',
          Fono: '752-552320',
        },
        {
          Cargo: 'Cajero tesorería Municipal',
          Nombre: 'Cristian Abud Valenzuela',
          Correo: 'cabud@curepto.cl',
          Fono: '752-552320',
        },
      ],
    },
    {
      id: 6,
      name: 'Dirección RR HH',
      description:
        'Encargada de mantener correcto funcionamiento de departamentos de recursos humanos',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/RRHH.jpg',
      contacts: [
        {
          Cargo: 'Directora RR.HH.',
          Nombre: 'Pilar Barraza Lorca',
          Correo: 'personal@curepto.cl',
          Fono: '752-552333',
        },
        {
          Cargo: 'Encargada de Remuneraciones Municipal',
          Nombre: 'Wanda Arancibia Nicolao',
          Correo: 'remuneraciones@curepto.cl',
          Fono: '752-552318',
        },
      ],
    },
    {
      id: 7,
      name: 'Tránsito',
      description:
        'Evaluar y disponibilidad correcto funcionamiento del trafico de drogas',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/Tr%C3%A1nsitoo.jpg',
      contacts: [
        {
          Cargo: 'Director Rentas, Tránsito y Transporte Público',
          Nombre: 'Nora Fell Orellana',
          Correo: 'nbfell@curepto.cl',
          Fono: '752-552325',
        },
        {
          Cargo: 'Encargada de Rentas',
          Nombre: 'Yoselin Gómez Catriao',
          Correo: 'ygomez@curepto.cl',
          Fono: '752-552344',
        },
        {
          Cargo: 'Inspector Municipal y Patentes',
          Nombre: 'Claudia Grilli Castro',
          Correo: 'inspeccionmunicipal@curepto.cl',
          Fono: '752-552344',
        },
        {
          Cargo: 'Encargado de Tránsito y Transporte Público',
          Nombre: 'César Marín Valenzuela',
          Correo: 'pcv@curepto.cl',
          Fono: '752-552344',
        },
      ],
    },
    {
      id: 8,
      name: 'Juzgado',
      description: 'Asignado a relaciones publicas con supremacía municipal',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/Juzgado.jpg',
      contacts: [
        {
          Cargo: 'Juez Titular del JPL',
          Nombre: 'Osvaldo Nicolao Morales',
          Correo: 'juzgado@curepto.cl',
          Fono: '752-552314',
        },
        {
          Cargo: 'Secretario Abogado',
          Nombre: 'Paula Díaz González',
          Correo: 'juzgado@curepto.cl',
          Fono: '752-552314',
        },
      ],
    },
    {
      id: 9,
      name: 'Departamento Social',
      description: 'Responsabilidad social importante',
      photo:
        'https://www.curepto.cl/mcurepto_web/images/carpeta%20sin%20t%C3%ADtulo/Fotos%20departamentos/Sociall.jpg',
      contacts: [
        {
          Cargo: 'Jefe Departamento Social',
          Nombre: 'Pamela Díaz Peredo',
          Correo: 'social@curepto.cl',
          Fono: '752-552305',
        },
        {
          Cargo: 'Secretaria departamento Social',
          Nombre: 'Andrea Rojas Alvarado',
          Correo: 'arojas@curepto.cl',
          Fono: '752-552343',
        },
        {
          Cargo: 'Encargada Registro Social de Hogares',
          Nombre: 'Mónica Poblete Poblete',
          Correo: 'mpoblete@curepto.cl',
          Fono: '752-552316',
        },
        {
          Cargo: 'Encargada Prestaciones monetarias',
          Nombre: 'Sara Reyes Espina',
          Correo: 'sreyes@curepto.cl',
          Fono: '752-552345',
        },
        {
          Cargo: 'Trabajador Social',
          Nombre: 'Alex González Saavedra',
          Correo: 'aagonzalez@curepto.cl',
          Fono: '752-552322',
        },
        {
          Cargo: 'Encargada oficina Vivienda y Discapacidad',
          Nombre: 'Yilda Díaz Espina',
          Correo: 'ydiaz@curepto.cl',
          Fono: '752-552348',
        },
      ],
    },
  ];

  constructor() {}

  getObject() {
    return this.hardcodedObjects;
  }

  getObjectById(id: number) {
    return this.hardcodedObjects.find((object) => object.id === id);
  }
}
