import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FeatureSectionsData } from 'src/app/models/features-section-data.model';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit{
  @Input() public featureData!: FeatureSectionsData;

  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    this.elementCreated.emit('destaques')
  }
}
