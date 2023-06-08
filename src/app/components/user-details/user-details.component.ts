import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserData } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.userData = this.router.getCurrentNavigation()?.extras.state
  }

  id: number = Number(this.route.snapshot.params['id'])
  user!: User
  userData!: UserData | undefined
  // loading: boolean = true

  ngOnInit(): void {
    // this.userService.getUserById$(this.id).subscribe({
    //   next: (res: User) => { this.user = res },
    //   error: (err) => console.error(err),
    //   complete: () => { this.loading = false }
    // })

    // this.route.data.subscribe(data => console.log(data))

  }

}
