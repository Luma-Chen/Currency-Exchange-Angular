import { Component } from '@angular/core';
import { ApisService } from '../apis.service';
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
  from_symbol: string = '';
  to_symbol: string = '';
  http: any;

  constructor(
    private apisService: ApisService,
    private route: ActivatedRoute,
    form: FormBuilder, 
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.apisService.getExchangeRate().subscribe(
        (sucesso) => {
          console.log(sucesso);
        },
        (erro) => {
          console.log(erro);
        }
      );
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {});
  }
}
