import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // <== új
import { User } from '../models/user.model'; // <== új
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule, 
    MatInputModule, MatSelectModule, MatRadioModule, MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regisztraciosUrlap: FormGroup;

  napok = Array.from({ length: 31 }, (_, i) => i + 1);
  honapok = ['jan', 'febr', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec'];
  evek = Array.from({ length: 100 }, (_, i) => 2025 - i);

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.regisztraciosUrlap = this.fb.group({
      keresztnev: ['', Validators.required],
      vezeteknev: ['', Validators.required],
      nap: ['', Validators.required],
      honap: ['', Validators.required],
      ev: ['', Validators.required],
      nem: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jelszo: ['', Validators.required]
    });
  }

  async kuldes() {
    if (this.regisztraciosUrlap.valid) {
      const adatok: User = {
        ...this.regisztraciosUrlap.value,
        profilKep: '7705305.jpg'
      };

      try {
        await this.authService.registerUser(adatok);
        // Mentés localStorage-be (későbbi dashboardhoz)
        localStorage.setItem('felhasznalo', JSON.stringify(adatok));
        this.router.navigate(['/dashboard']);
      } catch (error) {
        console.error('Hiba a regisztráció során:', error);
        alert('Hiba történt a regisztráció során.');
      }
    }
  }

  visszaALepeoldalra() {
    this.router.navigate(['/login']);
  }
}
