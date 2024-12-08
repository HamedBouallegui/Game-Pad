import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  adminEmail = "admin@gmail.com";
  adminPass = "ADMIN1234";

  constructor(
    private fb: FormBuilder,
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required], 
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === this.adminEmail && password === this.adminPass) {
        alert('Welcome, Admin!');
        this.router.navigate(['/dash']); 
        return; 
      }

      this.servicesService.login(email, password).subscribe({
        next: (response: any) => {
          if (response.length > 0) {
            const user = response[0]; // Assuming API returns matching user as an array
            alert(`Welcome, ${user.name}!`);
            this.loginForm.reset();
            this.router.navigate(['/home']); // Navigate to home page
          } else {
            alert('Invalid email or password.');
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('An error occurred during login. Please try again.');
        },
      });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
