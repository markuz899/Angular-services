import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './components/view/view.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ViewAddComponent } from './components/view-add/view-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ViewComponent },
  { path: 'view/:id', component: ViewDetailsComponent },
  { path: 'add', component: ViewAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
