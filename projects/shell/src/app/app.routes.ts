import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { loadRemoteModule } from './utils/federation-utils';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shard',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'shard',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: 'Shard',
      }).then(m => {
        return m.ShardComponent
      }),
  },
];