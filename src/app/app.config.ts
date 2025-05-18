import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyArrIwqKv1-BLQ3l7E2anBeae27bXDGc6M",
    authDomain: "kamu-facebook.firebaseapp.com",
    projectId: "kamu-facebook",
    storageBucket: "kamu-facebook.firebasestorage.app",
    messagingSenderId: "384777031150",
    appId: "1:384777031150:web:3d46db9e01a32fc93592ff"
  }
};

