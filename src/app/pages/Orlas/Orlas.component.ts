import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-Orlas',
  templateUrl: './Orlas.component.html',
  styleUrls: ['./Orlas.component.css']
})
export class OrlasComponent implements OnInit {
user!: User;
orlas!:any;
  constructor(private servicios:EventService,private router: Router,private loading: LoadingService,private cacheService: CacheService,) 
  { 
     this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
      this.loading.showSpinner2("Consultando")
this.servicios
      .OrlasPersonal(
        this.user.Nombre!,
        this.user.password!,
        3
      )
      .subscribe({
        next: (data: any) => {
          this.orlas=data;
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });

  }

  ngOnInit() {
  }

}
