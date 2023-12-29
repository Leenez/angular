import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg')
  ];

  constructor(){}

  ngOnInit() {

  }

}
