import { TestBed } from '@angular/core/testing';

import { AddingFormHandlerService } from './adding-form-handler.service';

describe('AddingFormHandlerService', () => {
  let service: AddingFormHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddingFormHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
