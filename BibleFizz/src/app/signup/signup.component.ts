import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signupForm: FormGroup;
  public passwordMatchError: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['', Validators.required],
    });

    this.signupForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.passwordMatchError = this.signupForm.get('password')?.value !== this.signupForm.get('confirmPassword')?.value;
    });
  }

  get form() {
    return this.signupForm.controls;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        confirmPassword: this.signupForm.value.confirmPassword,
      };

      this.authService.signup(formData).subscribe(
        (response: any) => {
          console.log('Signup successful', response);
          // Handle success, e.g., redirect to another page
        },
        (error: any) => {
          console.error('Signup failed', error);
          // Handle error, show error message to user
        }
      );
    } else {
      this.signupForm.markAllAsTouched();
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
    const passwordControl = this.signupForm.get('password');
    return passwordControl && passwordControl.errors ? passwordControl.errors['passwordStrength'] : null;
  }

  togglePasswordVisibility(field: string) {
    const currentFieldType = document.getElementById(field)?.getAttribute('type');
    const newFieldType = currentFieldType === 'password' ? 'text' : 'password';
    document.getElementById(field)?.setAttribute('type', newFieldType);
  }
}
