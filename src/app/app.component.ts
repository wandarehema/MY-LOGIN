import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response: any) => {
          this.loading = false;
          console.log('Login successful', response);
          // Redirect to another page or handle successful login
        },
        (error: any) => {
          this.loading = false;
          if (error.status === 401) {
            this.error = 'Invalid email or password. Please try again.';
          } else {
            this.error = 'An error occurred. Please try again later.';
          }
          console.error('Login failed', error);
        }
      );
    }
  }
}
