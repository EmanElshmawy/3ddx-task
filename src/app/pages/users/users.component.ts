import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // to get user info
  getUsers() {
    this.activeRoute.data.subscribe(
      (data: any) => {
        this.users = data['usersResolver'];
        console.log(this.users);

      }
    )
  }
}
