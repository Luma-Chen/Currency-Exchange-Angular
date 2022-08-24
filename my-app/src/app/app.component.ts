import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  fromSymbol: string = '';
  http: any;
  currency:string= '';

  constructor(private forms: FormBuilder) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.fromSymbol= this.currency;
    }
  }
  ngOnInit(): void {}
}