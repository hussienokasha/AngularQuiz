import { Component } from '@angular/core';
import { UserService } from '../../../Core/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private search: UserService) {}

  updateSearch(event: any) {
    this.search.setSearchTerm(event.target.value);
  }
}
