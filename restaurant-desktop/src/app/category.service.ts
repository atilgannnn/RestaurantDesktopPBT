import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private selectedFoodSource = new BehaviorSubject<any[]>([]);
  selectedFood$ = this.selectedFoodSource.asObservable();

  constructor() {}

  setSelectedFood(selectedFood: any[]) {
    this.selectedFoodSource.next(selectedFood);
  }

  addSelectedFood(newFoodItems: any[]): void {
    const currentSelectedFood = this.selectedFoodSource.value;
    const updatedSelectedFood = [...currentSelectedFood, ...newFoodItems];
    this.selectedFoodSource.next(updatedSelectedFood);
  }

  }
