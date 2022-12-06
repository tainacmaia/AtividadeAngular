import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactFormData } from 'src/app/models/contato-form-data.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  public btnDisabled = true;
  public formData: ContactFormData = {
    email: "teste@teste.com",
    message: "Hello World!"
  };

  ngOnInit() {
    this.elementCreated.emit('contato')
    setTimeout(() =>{
      this.btnDisabled = false;
    }, 5000);
  }
  public submitForm(): void {
    console.log('Formulário enviado!')
    console.log(this.formData);
    this.sendForm.emit(this.formData);
  }

  public showInputData(event: any): void {
    console.log(event.target.value)
  }
}
