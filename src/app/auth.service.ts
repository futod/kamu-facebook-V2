// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from './models/user.model'; // majd ezt is hozzuk létre

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: Firestore) {}

  async registerUser(user: User): Promise<void> {
    const usersRef = collection(this.firestore, 'users');
    await addDoc(usersRef, user);
  }
}
