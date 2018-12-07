import {Component, NgModule, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl( '',[Validators.required, Validators.pattern("[a-zA-Ząćęłńóśźż]+")]),
      lastName: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Ząćęłńóśźż]+")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      sex: new FormControl('', Validators.required),
      message: new FormControl('', [Validators.maxLength(50)]),
      age: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });
  }

}

