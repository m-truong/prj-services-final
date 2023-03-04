import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router) { }

  // Note: when working with angular observabels MUST always clean up the subscription for the observables
  
  ngOnInit() {
    // const id = this.route.snapshot.params['id']
    this.route.params.subscribe((params: Params)=> {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'] , { relativeTo: this.route } )
    // This goes up one path to re-direct on router in more complex paths
    // this.router.navigate(['../', this.onEditRecipe, 'edit'] , { relativeTo: this.route })
  }

}
