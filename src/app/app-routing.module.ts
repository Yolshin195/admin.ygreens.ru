import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { NomenclatureListComponent } from './component/reference/nomenclature/nomenclature-list/nomenclature-list.component';
import { NomenclatureNewComponent } from './component/reference/nomenclature/nomenclature-new/nomenclature-new.component';
import { NomenclatureComponent } from './component/reference/nomenclature/nomenclature.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'nomenclature', component: NomenclatureComponent},
  {path: 'nomenclature/new', component: NomenclatureNewComponent},
  {path: 'nomenclature/list', component: NomenclatureListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
