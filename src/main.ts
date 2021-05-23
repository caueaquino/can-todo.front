import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CanModule } from 'src/app/can.module';
import { environment } from 'src/environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CanModule)
  .catch(err => console.error(err));
