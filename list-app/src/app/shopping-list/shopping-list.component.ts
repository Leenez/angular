import { Component } from '@angular/core';
import { Incredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  incredients: Incredient[] = [new Incredient("Apples", 5), new Incredient("Oranges", 5)];

  constructor(){}

  ngOnInit(){}

}
