import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: number;
  editMode = false;

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']
        // If the 'id' is missing from params, then it should navigate to creating a new recipe as opposed to editing an existing one 
        this.editMode = (params['id'] != null);
        console.log(this.editMode)
      }
    )
  }

}
