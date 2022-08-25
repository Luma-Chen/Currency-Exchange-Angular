import {Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    public isLoading = new Subject<boolean>();

    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}