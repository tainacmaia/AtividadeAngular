import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    this.elementCreated.emit('footer')
  }
}
