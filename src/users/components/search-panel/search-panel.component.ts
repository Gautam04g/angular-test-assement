import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss'
})
export class SearchPanelComponent {
  @Output() search = new EventEmitter<any>();
  form: FormGroup = inject(FormBuilder).group({
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    position: ['']
  });

  onSubmit() {
    this.search.emit(this.form.value);
  }
}