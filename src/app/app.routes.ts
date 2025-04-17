import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: '', component: ContactListComponent },
  { path: 'contact-form', component: ContactFormComponent }
];
