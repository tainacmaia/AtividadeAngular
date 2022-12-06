import { AboutSectionData } from './../../models/about-section-data.model';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  @Input()
  public aboutData!: AboutSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    this.elementCreated.emit('sobre')
  }

  //private companyName: string = 'Turma854'

  // public getCompanyInfo(): string {
  //   return `
  //   <h1>${this.companyName}</h1>
  //   <p>
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
  //     arcu, malesuada eget posuere et, aliquam non elit. Sed maximus
  //     ullamcorper dui, ac sollicitudin quam molestie ac. Aenean laoreet,
  //     felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat
  //     nunc lacus ut sapien. Aliquam velit justo, vestibulum et augue ut,
  //     efficitur ultrices justo. Aenean non eros congue leo consectetur
  //     fermentum. Quisque ut dignissim tortor, eget porttitor magna. Etiam
  //     sem turpis, aliquam sit amet nisi non, bibendum finibus neque. Duis
  //     id odio dapibus, finibus tortor eget, cursus nunc. Morbi egestas
  //     nisl orci, in cursus ipsum cursus et. Pellentesque in suscipit
  //     ipsum, vel auctor nisl. Quisque vitae vehicula velit. Integer dolor
  //     sapien, rutrum faucibus eros ac, hendrerit aliquet diam. Quisque non
  //     sem eu odio vestibulum facilisis ac aliquam tellus. Cras aliquet
  //     velit quis suscipit tincidunt. Phasellus ut aliquam nulla.
  //   </p>
  //   `
  // }
}
