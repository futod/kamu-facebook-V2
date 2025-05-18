import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';





@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatButtonModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;
  constructor(private router: Router) {}

  login() {
    console.log('Bejelentkezés:', this.email, this.password);
    
  }
  onLogin(email: string, jelszo: string) {
    this.isLoading = true;

    setTimeout(() => {
    const mentett = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
    if (email === mentett.email && jelszo === mentett.jelszo) {
      // Sikeres belépés
      this.router.navigate(['/dashboard']); 
    } else {
      alert('Hibás e-mail vagy jelszó!');
    }
    this.isLoading = false;
  }, 1500);
  }
}
