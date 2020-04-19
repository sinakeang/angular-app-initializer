import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }

  init() {
    return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.init() called");
      // Do your initialisation stuff here
      setTimeout(() => {
        console.log('AppInit Service Completed');
        resolve();
      }, 4000);
    })
  }
}
