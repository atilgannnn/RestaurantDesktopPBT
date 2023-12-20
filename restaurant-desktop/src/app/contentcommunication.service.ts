import { Injectable } from '@angular/core';
import { ContentComponent } from './components/content/content.component';

@Injectable({
  providedIn: 'root',
})
export class ContentCommunicationService {
  private contentComponent: ContentComponent | undefined;

  setContentComponent(contentComponent: ContentComponent): void {
    this.contentComponent = contentComponent;
  }

  getContentComponent(): ContentComponent | undefined {
    return this.contentComponent;
  }
}
