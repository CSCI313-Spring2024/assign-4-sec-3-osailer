import { Injectable } from '@angular/core';
import { Contact } from '../Contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, first_name: 'Alice', last_name: 'Smith', phone_number: '1234567890', email_address: 'alice@example.com' },
    { id: 2, first_name: 'Bob', last_name: 'Johnson', phone_number: '0987654321', email_address: 'bob@example.com' }
  ];

  getContacts() {
    return [...this.contacts];
  }

  addContact(contact: Contact) {
    contact.id = Date.now();
    this.contacts.push(contact);
  }

  editContact(updated: Contact) {
    const index = this.contacts.findIndex(c => c.id === updated.id);
    if (index > -1) this.contacts[index] = updated;
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}
