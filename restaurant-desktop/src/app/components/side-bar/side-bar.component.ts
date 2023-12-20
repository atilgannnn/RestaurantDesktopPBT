import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  checkItems: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.selectedFood$.subscribe((selectedFood: any[]) => {
      this.checkItems = selectedFood;
    });
  }

  calculateTotalAmount(): number {
    return this.checkItems.reduce((total, item) => total + item.itemTotal, 0);
  }
}
