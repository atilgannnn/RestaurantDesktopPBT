import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ContentCommunicationService } from '../../contentcommunication.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  navigation: any[] = [];
  selectedFood: any[] = [];
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService,
    private contentCommunicationService: ContentCommunicationService
  ) {}

  ngOnInit(): void {
    this.loadNav();
    this.categoryService.selectedFood$.subscribe((data) => {
      this.selectedFood = data;
    });
    this.contentCommunicationService.setContentComponent(this);
  }

  loadNav() {
    this.http.get('assets/navbar.json').subscribe((res: any) => {
      this.navigation = res.data;
      this.extractFoodData();
    });
  }

  extractFoodData() {
    for (const item of this.navigation) {
      const foodData = item.food;
      console.log('Food Data for', item.name, ':', foodData);
    }
  }

  calculateTotalPrice(foodItem: any): number {
    return foodItem.quantity * foodItem.price;
  }

  increaseQuantity(index: number): void {
    this.selectedFood[index].quantity =
      (this.selectedFood[index].quantity || 0) + 1;
  }

  decreaseQuantity(index: number): void {
    if (
      this.selectedFood[index].quantity &&
      this.selectedFood[index].quantity > 0
    ) {
      this.selectedFood[index].quantity -= 1;
    }
  }

  handleClick(id: number) {
    const clickedItem = this.navigation.find((item) => item.id === id);

    if (clickedItem) {
      this.selectedFood = [];

      const firstFoodItem = clickedItem.food[0];
      this.selectedFood.push({ ...firstFoodItem, quantity: 0, price: 0 });

      console.log('Clicked on item with ID:', id);
      console.log('Food Data:', this.selectedFood);

      for (const foodItem of this.selectedFood) {
        const foodName = foodItem.name;
        const foodPrice = foodItem.price;

        console.log('Food Name:', foodName);
        console.log('Food Price:', foodPrice);
      }
    } else {
      console.error('Item with ID not found:', id);
    }
  }

  sendNavigationToApplyButton(): any[] {
    const navigation = this.navigation;
    return navigation;
  }
}
