import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { NomenclatureComponent } from './component/reference/nomenclature/nomenclature.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'nomenclature', component: NomenclatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
