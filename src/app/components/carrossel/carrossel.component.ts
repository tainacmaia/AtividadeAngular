import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit{
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(){
    this.elementCreated.emit('carrossel')
  }
}
