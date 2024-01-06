import { Injectable } from "@angular/core";
import { Counter } from "./counter.service";

@Injectable()
export class Users {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private count: Counter) {}

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.count.addInactive();
      }
    
    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.count.addActive();
      }
}