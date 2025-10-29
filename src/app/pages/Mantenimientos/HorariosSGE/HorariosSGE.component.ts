import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { User } from 'src/app/core/models/auth.models';
@Component({
  selector: 'app-HorariosSGE',
  templateUrl: './HorariosSGE.component.html',
  styleUrls: ['./HorariosSGE.component.css']
})
export class HorariosSGEComponent implements OnInit {
  user!: User;
  Datos: any;
  dayOptions: any;
 
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando");
     this.dayOptions= [
    { value: 1, text: 'Lunes' },
    { value: 2, text: 'Martes' },
    { value: 3, text: 'Miércoles' },
    { value: 4, text: 'Jueves' },
    { value: 5, text: 'Viernes' },
    { value: 6, text: 'Sábado' },
    { value: 7, text: 'Domingo' }
  ];
  }

  ngOnInit() {
    this.CargarDatos();
    
  }
  CargarDatos() {
    this.servicios
      .HorariosSGE(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.loading.closeSpinner();
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
}
