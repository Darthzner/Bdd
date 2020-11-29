import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetallclientesComponent } from './components/getallclientes/getallclientes.component';
import { GetallpersonalComponent } from './components/getallpersonal/getallpersonal.component';

const routes: Routes = [
	{path: 'getallclientes', component: GetallclientesComponent},
	{path: 'getallpersonal', component: GetallpersonalComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GetallRoutingModule { }
