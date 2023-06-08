import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router) { }

  @Input() user!: User


  goToDetails(): void {
    // this.router.navigate([`/users/${this.user.id}`])
    this.router.navigateByUrl(`/users/${this.user.id}`, { state: this.user })
  }


}
