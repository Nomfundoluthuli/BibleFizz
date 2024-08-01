import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public loginSuccess: boolean = false;
  public loginFailed: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.authService.signin(credentials).subscribe(
        (response: any) => {
          console.log('Login successful', response);
          this.authService.saveToken(response.token);
          this.loginSuccess = true;
          this.loginFailed = false;
          // Handle success, e.g., redirect to another page
          this.router.navigate(['/welcome'])

        },
        (error: any) => {
          console.error('Login failed', error);
          this.loginFailed = true;
          this.loginSuccess = false;
          // Handle error, show error message to user
        }
      );
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
    const fieldElement = document.getElementById(field);
    if (fieldElement) {
      const currentFieldType = fieldElement.getAttribute('type');
      const newFieldType = currentFieldType === 'password' ? 'text' : 'password';
      fieldElement.setAttribute('type', newFieldType);
    }
  }

  passwordValidator(control: AbstractControl) {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const validLength = value ? value.length >= 5 : false;

    if (!hasNumber || !hasLower || !hasSpecial || !validLength) {
      return { passwordStrength: true };
    }
    return null;
  }

  get passwordStrength() {
    const passwordControl = this.loginForm.get('password');
    return passwordControl && passwordControl.errors ? passwordControl.errors['passwordStrength'] : null;
  }
}
