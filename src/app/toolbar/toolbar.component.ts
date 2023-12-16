import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  title = 'point-tracker';
  color = 'color';

  nameLogin: string;

  edit: boolean = false;
  @Output() editChange = new EventEmitter<boolean>();
  disabled = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nameLogin = this.route.snapshot.params['nameLogin'];
  }

  toggleEdit() {
    this.editChange.emit(!this.edit);
  }
}
