import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private _users: Users){}
  ngOnInit(): void {
    this.users = this._users.activeUsers;
  }

  onSetToInactive(id: number) {
    this._users.setToInactive(id);
  }
}
