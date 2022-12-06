import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { InputSearchData } from 'src/app/models/input-search-data.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public inputSearch: EventEmitter<InputSearchData> = new EventEmitter<InputSearchData>();
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  public searchData: InputSearchData = {
    inputSearch: "",
  }

  ngOnInit(){
    this.elementCreated.emit('header')
    this.inputSearch.emit(this.searchData);
  }

  public submitSearch(): void {
    console.log(`Pesquisa realizada.`);
    this.inputSearch.emit(this.searchData);
  }
}
