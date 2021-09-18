import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image/upload-image.component';



@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UploadImageComponent
  ]
})
export class FormControlModule { }
