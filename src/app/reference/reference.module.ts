import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { FormControlModule } from '../shared/form-control/form-control.module';

import { ReferenceRoutingModule } from './reference-routing.module';
import { NomenclatureListComponent } from './component/nomenclature/nomenclature-list/nomenclature-list.component';
import { NomenclatureNewComponent } from './component/nomenclature/nomenclature-new/nomenclature-new.component';
import { NomenclatureComponent } from './component/nomenclature/nomenclature.component';


@NgModule({
  declarations: [
    NomenclatureComponent,
    NomenclatureListComponent,
    NomenclatureNewComponent
  ],
  imports: [
    CommonModule,
    ReferenceRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    FormControlModule
  ]
})
export class ReferenceModule { }
