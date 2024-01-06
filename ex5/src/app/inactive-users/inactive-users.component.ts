import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private _users: Users) {}

  ngOnInit() {
    this.users = this._users.inactiveUsers
  }

  onSetToActive(id: number) {
    this._users.setToActive(id);
  }
}
