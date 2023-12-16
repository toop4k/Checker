import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Us, US } from '../interface/us';
import { Item } from '../shared/Item';
import { encrypt } from '../util/util-encrypt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  username: string = '';
  password: string = '';

  validationUsList:Us[] =US;

  constructor(private router: Router) {}

  onSubmit(nameLogin: string, passRequest: string): void {
    // @ts-ignore
    let usOpt :Us[] = this.validationUsList.filter(
      Item => Item.us == nameLogin
    );
    
    console.log(encrypt(passRequest));

     // @ts-ignore
    if (usOpt.length>0 && (usOpt.at(0).pass)==encrypt(passRequest)) {
      
      this.router.navigate(['/begin',nameLogin]);
    } else {
      console.error('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
  }
}
