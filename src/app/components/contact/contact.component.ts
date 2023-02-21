import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  successMsg!: string;
  regForm!: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendEmail(e: any) {
    if (this.regForm.valid) {
      emailjs
        .sendForm(
          'CreativeJoomdev',
          'template_zfdfbhb',
          e.target as HTMLFormElement,
          'user_4Kz3CZE1vCo9SJpjpYdSB'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            this.successMsg = 'Thank you! We received your message';
            console.log('result success', result.text);
          },
          (error) => {
            console.log('result error', error.text);
          }
        );
      e.target.reset();
    } else {
      this.validateAllFormFields(this.regForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
