import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input() contact: any = { first_name: '', last_name: '', phone_number: '', email_address: '' };
  @Input() isEditing: boolean = false;
  @Output() saveContact = new EventEmitter<any>();
  @Output() cancelAdd = new EventEmitter<void>();

  onSave() {
    this.saveContact.emit(this.contact);
  }

  onCancel() {
    this.cancelAdd.emit();
  }
}
