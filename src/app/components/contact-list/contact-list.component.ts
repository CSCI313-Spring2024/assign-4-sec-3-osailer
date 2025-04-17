import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';

interface Contact {
  first_name: string;
  last_name: string;
  phone_number: string;
  email_address: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ContactFormComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = [
    { first_name: 'John', last_name: 'Doe', phone_number: '123-456-7890', email_address: 'john@example.com' },
    { first_name: 'Jane', last_name: 'Smith', phone_number: '234-567-8901', email_address: 'jane@example.com' }
  ];
  
  newContact: Contact = { first_name: '', last_name: '', phone_number: '', email_address: '' };
  adding: boolean = false;
  editing: boolean = false;
  contactToEdit: Contact | null = null;

  addContact() {
    this.adding = true;
    this.contactToEdit = null;
    this.newContact = { first_name: '', last_name: '', phone_number: '', email_address: '' };
  }

  saveContact(contact: Contact) {
    if (this.editing) {
      const index = this.contacts.indexOf(this.contactToEdit!);
      if (index > -1) {
        this.contacts[index] = contact;
      }
    } else {
      this.contacts.push(contact);
    }
    this.adding = false;
    this.editing = false;
  }

  cancelAdd() {
    this.adding = false;
    this.editing = false;
    this.contactToEdit = null;
  }

  deleteContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    if (index > -1) this.contacts.splice(index, 1);
  }

  editContact(contact: Contact) {
    this.contactToEdit = { ...contact };
    this.adding = true;
    this.editing = true;
  }
}
