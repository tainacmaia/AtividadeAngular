import { ContactFormData } from 'src/app/models/contato-form-data.model';

import { Component } from '@angular/core';
import { AppData } from './models/app-data.model';
import { AddressData } from './models/endereco-data.model';
import { InputSearchData } from './models/input-search-data.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: AppData = {
    features: {
      sectionTitle: 'Destaques',
      feature1: {
        image: 'feature1.png',
        title: 'Destaque 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor arcu, malesuada eget posuere et.'
      },
      feature2: {
        image: 'feature2.png',
        title: 'Destaque 2',
        text: 'Aenean laoreet, felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien.'
      },
      feature3: {
        image: 'feature3.png',
        title: 'Destaque 3',
        text: 'Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim tortor, eget porttitor magna.'
      },
      feature4: {
        image: 'feature4.png',
        title: 'Destaque 4',
        text: 'Duis id odio dapibus, finibus tortor eget, cursus nunc. Morbi egestas nisl orci, in cursus ipsum cursus et.'
      }
    },
    about: {
      sectionTitle: 'Sobre a empresa',
      text: '<p>Lorem ipsum dolor sit ame, consectetur adipiscing elit. Ut dolor arcu, malesuada eget posuere et, aliquam non elit. Sed maximus ullamcorper dui, ac sollicitudin quam molestie ac. Aenean laoreet, felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien. Aliquam velit justo, vestibulum et augue ut, efficitur ultrices justo. Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim tortor, eget porttitor magna. Etiam sem turpis, aliquam sit amet nisi non, bibendum finibus neque.</p>'
    },
    address: {
      sectionTitle: "Endereço",
      data: {
        street: "Rua Luiz Galvez",
        number: 254,
        complement: "3º andar, sala 306",
        state: "AC",
        city: "Rio Branco",
        district: "Conjunto Castelo Branco",
        zipCode: "69911-262"
      }
    }
  }

  onElementCreated(element: string): void {
    console.log('Elemento criado:', element);
  }

  onContactFormSumitted(formData: ContactFormData): void {
    console.log('Formulário enviado com sucesso')
  }

  onSearchSubmitted(searchData: InputSearchData): void {
    if(searchData.inputSearch != ""){
    console.log("Texto da pesquisa:", searchData.inputSearch)
    }
  }

  onGetAddressData(addressData: AddressData): void {
    console.log(`Endereço recebido: ${addressData.street}, ${addressData.number}, ${addressData.complement}, ${addressData.state}, ${addressData.city}, ${addressData.district}, ${addressData.zipCode}`)
  }
}
