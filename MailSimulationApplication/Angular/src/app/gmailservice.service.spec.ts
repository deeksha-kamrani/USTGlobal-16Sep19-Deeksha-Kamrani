import { TestBed } from '@angular/core/testing';

import { GmailserviceService } from './gmailservice.service';

describe('GmailserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmailserviceService = TestBed.get(GmailserviceService);
    expect(service).toBeTruthy();
  });
});
