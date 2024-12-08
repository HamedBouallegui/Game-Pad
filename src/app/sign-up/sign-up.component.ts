import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private servicesService: ServicesService) {
    this.signUpForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },

    );
  }


  onSubmit() {
    if (this.signUpForm.valid) {
      const { name, email, password, mobile } = this.signUpForm.value;
      const user = { name, email, password, mobile };

      this.servicesService.signUp(user).subscribe({
        next: (response: any) => {
          console.log('User signed up:', response);
          alert('Sign-up successful!');
        },
        error: (err: any) => {
          console.error('Error signing up:', err);
          alert('An error occurred during sign-up. Please try again.');
        },
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}

