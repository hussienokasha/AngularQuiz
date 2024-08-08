import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../../../Core/Services/user.service';
import { User } from '../../../Core/Models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userData!: User;
  constructor(
    private activatedRoute: ActivatedRoute,
    private user: UserService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.getUserDetails(id);
  }
  getUserDetails(uid: number) {
    this.user.getUser(uid).subscribe({
      next: (val: any) => {
        this.userData = val.data;
      },
    });
  }
}
