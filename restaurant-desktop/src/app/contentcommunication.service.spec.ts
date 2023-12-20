import { TestBed } from '@angular/core/testing';

import { ContentCommunicationService } from './contentcommunication.service';

describe('ContentcommunicationService', () => {
  let service: ContentCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
