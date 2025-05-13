import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  rememberMe = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
  ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
    if(typeof window !== 'undefined' && typeof localStorage !== 'undefined'){
      const savedUser = localStorage.getItem('rememberedUserName');
      const savedPass = localStorage.getItem('rememberedPassword');
  
      if (savedUser && savedPass) {
        this.loginForm.patchValue({
          userName: savedUser,
          password: savedPass,
        });
        this.rememberMe = true;
      }
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.loading = true;
    const { userName, password } = this.loginForm.value;
    this.api.post<{token: string}>('Visitor/login',{
      username: userName,
      password: password
    }).subscribe({
      next: (resp) => {
        localStorage.setItem('token', resp.token);

           if (this.rememberMe) {
             localStorage.setItem('rememberedUserName', userName);
             localStorage.setItem('rememberedPassword', password);
           } else {
             localStorage.removeItem('rememberedUserName');
             localStorage.removeItem('rememberedPassword');
           }
       this.router.navigate(['/main/visitors']);
      },
      error: (err) => {
        this.loginForm.setErrors({ invalidLogin: true})
        this.loading = false;

        if (err.error?.message) {
          this.errorMessage = err.error.message; // <-- You can bind this in HTML
        } else if (err.status === 0) {
          this.errorMessage = 'Server is unreachable. Please try again later.';
        } else {
          this.errorMessage = 'Invalid username or password.'; // fallback
        }
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  toggleRememberMe(e: Event): void {
    this.rememberMe = (e.target as HTMLInputElement).checked;
  }
}
