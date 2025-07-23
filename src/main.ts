import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { licenseKey } from './devextreme-license';
import config from 'devextreme/core/config';
if (environment.production) {
  enableProdMode();
}
config({ licenseKey })
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
