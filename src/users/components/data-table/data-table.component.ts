import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interface/user';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input() users: User[] = [];
}