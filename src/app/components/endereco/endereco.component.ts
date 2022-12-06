import { AddressData } from '../../models/endereco-data.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressSectionData } from 'src/app/models/address-section-data.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  @Input() public addressData!: AddressSectionData;
  // public addressData: AddressData = {
  //   street: "Rua do Unicórnio",
  //   number: 123,
  //   complement: "Quadra Z",
  //   state: "Fairy Tale",
  //   city: "Goblins Heaven",
  //   district: "Jardim do Arco-íris",
  //   zipCode: "12345-678"
  // }

  constructor() {}

  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();
  @Output() public getAddressData: EventEmitter<AddressData> = new EventEmitter<AddressData>();

  public getAddress(): void {
    this.getAddressData.emit(this.addressData.data);
  }

  ngOnInit(){
    this.elementCreated.emit('endereco')
    this.getAddressData.emit(this.addressData.data);
  }
}
