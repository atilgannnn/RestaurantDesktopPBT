import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  navigation: any[] = [];
  selectedFood: any[] = [];
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadNav();
  }

  loadNav() {
    this.http.get('assets/navbar.json').subscribe((res: any) => {
      this.navigation = res.data;
    });
  }

  handleClick(id: number) {
    const clickedItem = this.navigation.find((item) => item.id === id);

    if (clickedItem) {
      const selectedFood = clickedItem.food;
      this.categoryService.setSelectedFood(selectedFood);
      this.categoryService.addSelectedFood(selectedFood); 

      console.log('Clicked on item with ID:', id);
      console.log('Food Data:', selectedFood);
    } else {
      console.error('Item with ID not found:', id);
    }
  }
}
