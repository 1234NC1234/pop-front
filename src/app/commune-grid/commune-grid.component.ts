import { Component, OnInit, ElementRef } from '@angular/core';
import { Commune, CommuneResponse } from '../model/commune';
import { CommuneService } from '../commune.service';
import { Observable } from 'rxjs/Rx';
import {DebounceInputComponent} from "../debounce-input/debounce-input.component";

@Component({
  selector: 'app-commune-grid',
  templateUrl: './commune-grid.component.html',
  styleUrls: ['./commune-grid.component.css']
})
export class CommuneGridComponent implements OnInit {

  private communes:Commune[]
  private fields:any = {}

  constructor(private communeService:CommuneService, private elementRef: ElementRef) {
      this.communeService.data.subscribe(data => this.communes = data)
  }

  ngOnInit() {
    this.callAllCommunes()
  }

  public searchChanged(field, value) {
      this.fields[field] = value;
      if(this.fields['commune'] && !this.fields['inseeCode'] && !this.fields['depCode'] && !this.fields['pop']) {
        this.communeService.getCommune(value)
      }else {
        this.callAllCommunes();
      }
  }

  private callAllCommunes(){
    this.communeService.getAllCommunes(this.fields['commune'], this.fields['inseeCode'], this.fields['depCode'], this.fields['pop'])
  }

  private getTrClass(index){
     return ((index + 1) % 2 > 0) ? 'grey' : ''
  }

}
