import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Nomenclature, NomenclatureService } from 'src/app/services/nomenclature.service';

@Component({
  selector: 'reference-nomenclature',
  templateUrl: './nomenclature.component.html',
  styleUrls: ['./nomenclature.component.scss']
})
export class NomenclatureComponent implements OnInit {
  nomenclatureList: Nomenclature[] = [];
  searchValue: string = "";

  constructor(private fb:FormBuilder, public nomenclatureService: NomenclatureService) { }

  ngOnInit(): void {
    this.nomenclatureService
    .findAll()
    .subscribe(nomenclatureList => this.nomenclatureList = nomenclatureList);
  }

}
