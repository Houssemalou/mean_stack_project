import { Routes } from '@angular/router';
import { BookLocalComponent } from './book-local/book-local.component';
import { LocalDescriptionComponent } from './local-description/local-description.component';
import { LocalComponent } from './local/local.component';

export const routes: Routes = [
    {'path' : '', component : LocalComponent},
    {'path' : 'book', component : BookLocalComponent},
    {'path' : 'local/:id', component : LocalDescriptionComponent}
];
