import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  // categories?: Category[];

  // $ = notación de observable
  categories$?: Observable<Category[]>;

  constructor(
    private CategoryService: CategoryService
  ) { }

  ngOnInit(): void {
    // esta forma es con subscripciones
    /*
    this.CategoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      }, error: (error) => { }
    });
    */

    // esta forma es con async pipe
    this.categories$ = this.CategoryService.getAllCategories();
  }

}
