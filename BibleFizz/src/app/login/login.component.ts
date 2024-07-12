import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent {
loginSuccess: any;
loginFailed: any;
xyz() {
throw new Error('Method not implemented.');
}

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); // Replace with your logic to submit the form
    } else {
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.loginForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  togglePasswordVisibility(field: string) {
    const currentFieldType = document.getElementById(field)?.getAttribute('type');
    const newFieldType = currentFieldType === 'password' ? 'text' : 'password';
    document.getElementById(field)?.setAttribute('type', newFieldType);
  }
  passwordValidator(control: AbstractControl) {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const validLength = value ? value.length >= 5 : false;

    if (!hasNumber || !hasLower ||  !hasSpecial || !validLength) {
      return { passwordStrength: true };
    }
    return null;
   
  }
  get passwordStrength(){
    const passwordControl = this.loginForm.get('password');
    return passwordControl && passwordControl.errors ? passwordControl.errors['passwordStrength']:null;
  }

}
