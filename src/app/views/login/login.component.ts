import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { ServiceService } from '../../services/service.service';
import { AuthResponse } from '../../interfaces/auth-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authForm!: FormGroup;

  constructor (private fb: FormBuilder, private authService: ServiceService, private router: Router){
    this.authForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  login(){
    if (this.authForm.invalid) {
      return
    }
    
    this.authService.login(this.authForm.value).subscribe({
      next: (value: AuthResponse) =>{
        console.log(value)
        this.authService.setToken(value.token);
        this.router.navigateByUrl('deshboard');
      }, error(err){
        console.log(err);
        
      }
    })
  }
}
