import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactoForm',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  name: string;
  email: string;
  mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    alert(this.name)
  }
}
