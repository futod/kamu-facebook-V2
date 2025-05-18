import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers!,
    
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "kamu-facebook", appId: "1:384777031150:web:3d46db9e01a32fc93592ff", storageBucket: "kamu-facebook.firebasestorage.app", apiKey: "AIzaSyArrIwqKv1-BLQ3l7E2anBeae27bXDGc6M", authDomain: "kamu-facebook.firebaseapp.com", messagingSenderId: "384777031150" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
