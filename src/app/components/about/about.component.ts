import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
    // styles: ['div {background-color: #97f0b7; padding: 20px;}']
})

export class AboutComponent implements OnInit {
    constructor(private userService: UserService) { }

    users: User[] = []
    user!: User | undefined
    loading: boolean = true
    numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    ngOnInit(): void {
        this.userService.getUsers$().subscribe({
            next: (response: User[]) => { this.users = response },
            error: (err) => { console.error(err) },
            complete: () => {
                console.log('Done')
                this.loading = false
            }
        })
    }

    handlePassId = (userId: string) => {
        const id = Number(userId);

        this.userService.getUserById$(id).subscribe({
            next: (response: User) => { this.user = response },
            error: (error) => { console.error(error) },
            complete: () => {
                console.log(`Rendered element id: ${id}`);
            }
        })
    }

    hideUser = () => {
        this.user = undefined
    }

}