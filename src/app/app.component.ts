import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from '../users/components/search-panel/search-panel.component';
import { DataTableComponent } from '../users/components/data-table/data-table.component';
import { UserService } from '../users/services/user.service';
import { User } from '../users/interface/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchPanelComponent, DataTableComponent],
  template: `
    <div class="main-container">
      <h2>Angular-Test-Assement</h2>
      <app-search-panel (search)="onSearch($event)"></app-search-panel>
      <app-data-table [users]="users()"></app-data-table>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private userService = inject(UserService);
  users = signal<User[]>([]);

  onSearch(filters: Partial<User>) {
    this.userService.searchUsers(filters).subscribe((data) => {
      this.users.set(data);
    });
  }
}