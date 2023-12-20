import { Component } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrl: './cancel-button.component.scss',
})
export class CancelButtonComponent {
  constructor(private categoryService: CategoryService) {}

  cancelSelection() {
    this.categoryService.setSelectedFood([]);
  }
}
