import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { User } from 'src/app/core/models/auth.models';
@Component({
  selector: 'app-AcumulaDecimos',
  templateUrl: './AcumulaDecimos.component.html',
  styleUrls: ['./AcumulaDecimos.component.css']
})
export class AcumulaDecimosComponent implements OnInit {
  user!: User;
  Datos: any;
  fecha = new Date();
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {

    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")

  }

  ngOnInit() {
    this.CargarDatos();
  }
  CargarDatos() {
    const fechaProc = new Date(this.user.fecha_proceso!);
    this.servicios
      .AcumulacionDecimos(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!,
        fechaProc
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.Datos = this.Datos.map((r: any) => ({
            ...r,
            DECIMO_TERCERO_BOOL:
              r.DECIMO_TERCERO === 'A'
                ? null
                : r.DECIMO_TERCERO === 'S'
                  ? true
                  : r.DECIMO_TERCERO === 'N'
                    ? false
                    : null,
            DECIMO_CUARTO_BOOL:
              r.DECIMO_CUARTO === 'A'
                ? null
                : r.DECIMO_CUARTO === 'S'
                  ? true
                  : r.DECIMO_CUARTO === 'N'
                    ? false
                    : null
          }));
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  onToolbarPreparing(e: any) {
    e.toolbarOptions.items.unshift(
      {
        location: 'before',
        widget: 'dxCheckBox',
        options: {
          value: true,
          text: 'Acumula',
          readOnly: true,
          elementAttr: {
            class: 'chk-borde'   // ← clase personalizada
          }
        }
      }, {
      location: 'before',
      widget: 'dxCheckBox',
      options: {
        value: false,
        text: 'No Acumula',
        readOnly: true,
          elementAttr: {
            class: 'chk-borde'   // ← clase personalizada
          }
      }
    }, {
      location: 'before',
      widget: 'dxCheckBox',
      options: {
        value: null,
        text: 'No Asignado',
        readOnly: true,
          elementAttr: {
            class: 'chk-borde'   // ← clase personalizada
          }
      }
    });
  }
  currentValueChanged(e: any) {
    this.loading.showSpinner2("Consultando");
    this.fecha = e.value;
    this.CargarDatos();
  }
}
