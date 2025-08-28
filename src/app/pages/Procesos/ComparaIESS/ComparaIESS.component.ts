import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-ComparaIESS',
  templateUrl: './ComparaIESS.component.html',
  styleUrls: ['./ComparaIESS.component.css']
})
export class ComparaIESSComponent implements OnInit {
data: any[] = [];
Fecha: Date = new Date();
Comparacion :any;
 user!: User;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {
  
      this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    }
  ngOnInit() {
  }
onFileChange(e: any) {
  this.loading.showSpinner2("Comparando")
  const file = e.value[0];
  if (!file) return;
  const formData = new FormData();
  formData.append('file', file!, file!.name);
  this.servicios
      .CompararIESS(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!,
        formData,
        this.Fecha,
      )
      .subscribe({
        next: (res: any) => {
          this.Comparacion = res;
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
}
onCellPrepared(e: any) {
  if (e.rowType === "data" && (e.column.dataField === "SUELDO" || e.column.dataField === "DIAS" || e.column.dataField === "SUELDO_IESS" || e.column.dataField === "DIAS_IESS" )) {
    if (e.data.DIF_SUELDO === 1) {
      e.cellElement.style.backgroundColor = "#FAE7E7";
      e.cellElement.style.color = "darkred";
    }
    if (e.data.DIF_DIAS === 1) {
      e.cellElement.style.backgroundColor = "#FAE7E7";
      e.cellElement.style.color = "darkred";
    }
  }
}
}
