import { Component } from '@angular/core';
import { AL, Al } from '../interface/al';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent {
alumnis: Al[]= AL;

}
