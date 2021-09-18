import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageService, Image } from 'src/app/services/image.service';

@Component({
  selector: 'form-upload-image',
  template: `
    <div (click)="fileInput.click()">
      <img src={{path}} class="img-thumbnail" alt="..." style="width: 100%;">
        <input
            style="display: none"
            #fileInput
            type="file" (change)="onFileSelected($event)" >
    </div>
  `,
  styles: [
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UploadImageComponent),
    multi: true
  }]
})
export class UploadImageComponent implements OnInit, ControlValueAccessor {
  path: string = '/assets/add_new_img.svg';
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  writeValue(image: Image): void {
    if (image) {
      this.path = `/api/image/${image.fileName}`;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

  onFileSelected(event: any) {
    const selectedFile: File = <File>event.target.files[0];
    this.imageService.saveFile(selectedFile).subscribe(image => {
      this.path = `/api/image/${image.fileName}`
      this.propagateChange(image);
      this.registerOnTouched(image);
    });
  }

}