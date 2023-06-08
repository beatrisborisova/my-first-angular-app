import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder) { }

  registerFormGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    username: new FormControl('', [customValidator]),
    passwords: new FormGroup({
      password: new FormControl('', [specialCharsValidator]),
      repass: new FormControl('', [specialCharsValidator])
    })
  })

  onRegister() {
    console.log(this.registerFormGroup.value);

  }

}

const customValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value;

  if (value !== 'TEST') {
    return { custom: true }
  }

  return null
}


const specialCharsValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value;
  const specialCharacters = '!@#$%^&*()_+'
  const specialCharactersArr = specialCharacters.split('')

  if (value.split('').some((el: string) => el === '!')) {
    return { exclamationMark: true }
  }
  return null
}