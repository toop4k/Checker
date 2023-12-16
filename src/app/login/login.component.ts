import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Us, US } from '../interface/us';
import { Item } from '../shared/Item';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  validationUsList:Us[] =US;

  constructor(private router: Router) {}

  onSubmit(usRequest: string, passRequest: string): void {
    // @ts-ignore
    let usOpt :Us[] = this.validationUsList.filter(
      Item => Item.us == usRequest
    );
    
     // @ts-ignore
    if (usOpt.length>0 && (usOpt.at(0).pass)==passRequest) {
      
      this.router.navigate(['/begin']);
    } else {
    
      console.error('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
  }
}
