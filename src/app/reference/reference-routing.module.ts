import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NomenclatureComponent } from './component/nomenclature/nomenclature.component';

const routes: Routes = [
  {path: 'nomenclature', component: NomenclatureComponent},
  {path: '**', redirectTo: 'nomenclature'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule { }
