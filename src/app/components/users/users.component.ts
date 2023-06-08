import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = []
  loading: boolean = true

  ngOnInit(): void {
    this.userService.getUsers$().subscribe({
      next: (res: User[]) => { this.users = res },
      error: (err) => { console.error(err) },
      complete: () => { this.loading = false }
    })
  }

}
