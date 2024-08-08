import { Component, computed } from '@angular/core';
import { ResponseData, User } from '../../../Core/Models/user';
import { UserService } from '../../../Core/Services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {


  users!: ResponseData;

  currentPage:number =1 ;
  constructor(private _userService: UserService) {}
  ngOnInit() {
    this.getUsers(this.currentPage);

  }
  getUsers(page:number) {
    this._userService.getAllUsers(page).subscribe({
      next: (data: ResponseData) => {
        this.users = data;
      },
    });
  }
  get filteredUsers() {
    return computed(() => {
      const searchTerm = this._userService.searchTerm().toLowerCase();
      return this.users?.data?.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchTerm) ||
          user.last_name.toLowerCase().includes(searchTerm)
      );
    });
  }
  onPageChange($event: any) {
    this.currentPage = $event.page + 1
    this.getUsers(this.currentPage)
    }

}
