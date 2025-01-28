import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// register routing via delivered routing provider for AppComponent, thanks by created app.config.ts & app.routes.ts 
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
