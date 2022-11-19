import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmNavComponent } from './em-nav/em-nav.component';
import { EmFormComponent } from './em-form/em-form.component';
import { EmTableComponent } from './em-table/em-table.component';
import { EmViewFormComponent } from './em-view-form/em-view-form.component';

const routes: Routes = [
    { path: '#', component: EmNavComponent },
    { path: 'emform', component: EmFormComponent },
    { path: 'emtable', component: EmTableComponent },
    { path: 'emviewform', component: EmViewFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
