import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('loginForm') loginForm!: NgForm;
  username: string = ''

  ngAfterViewInit() {
    console.log(this.loginForm);
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.onFormClear();
  }

  handleLogin(): void {
    sessionStorage.setItem('token', 'jujhYUHnh83NuhkUb88OnjJ93wweiW3JOIwjujhYUHnh83NuhkUb88OnjJ93wweiW3JOIwjujhYUHnh83NuhkUb88OnjJ93wweiW3JOIw')
  }

  onFormClear(): void {
    // this.loginForm.setValue({
    //   username: '',
    //   password: ''
    // })
    // this.loginForm.form.markAsUntouched();

    this.loginForm.reset()
  }
}
