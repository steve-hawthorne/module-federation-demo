import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'shard',
      loadChildren: () => import('./app.component').then(m => m.ShardComponent),
    },
  ];