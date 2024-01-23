import { NgModule } from "@angular/core";
import { RecipesComponent } from "../recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes'},
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({

})
export class AppRoutingModule {


}