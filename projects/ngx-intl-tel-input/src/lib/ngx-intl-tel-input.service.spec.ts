import { TestBed } from '@angular/core/testing';

import { NgxIntlTelInputService } from './ngx-intl-tel-input.service';

describe('NgxIntlTelInputService', () => {
  let service: NgxIntlTelInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIntlTelInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
