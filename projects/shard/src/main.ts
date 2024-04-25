import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ShardComponent } from './app/app.component';

bootstrapApplication(ShardComponent, appConfig)
  .catch((err) => console.error(err));
