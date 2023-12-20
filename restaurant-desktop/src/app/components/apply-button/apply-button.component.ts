// apply-button.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Observable } from 'rxjs';
import { ContentCommunicationService } from '../../contentcommunication.service';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.scss'],
})
export class ApplyButtonComponent implements OnInit {
  @Input() selectedFood$: Observable<any[]> | undefined;
  selectedFood: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private contentCommunicationService: ContentCommunicationService
  ) {}

  ngOnInit(): void {
    this.categoryService.selectedFood$.subscribe((selectedFood: any[]) => {
      console.log('Seçili Yiyecekler:', selectedFood);
      this.selectedFood = selectedFood;
    });

    const contentComponent =
      this.contentCommunicationService.getContentComponent();
    if (contentComponent) {
      const navigation = contentComponent.sendNavigationToApplyButton();
      console.log('Navigation:', navigation);
    }
  }

  applySelection(): void {
    this.categoryService.addSelectedFood(this.selectedFood);
    console.log('Apply Selection çalıştı');
  }
}
