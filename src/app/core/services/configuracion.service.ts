export class estado {
  ID!: number;

  Name!: string;
}

import { Injectable } from '@angular/core';


export const environment = {
  myCustomProperty: 'original value'
};

const estados: estado[] = [
  {
    ID: 1,
    Name: 'ACTIVO',
  },
  {
    ID: 0,
    Name: 'INACTIVO',
  },
];

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor() { }
  getestados(): estado[] {
    return estados;
  }

}
