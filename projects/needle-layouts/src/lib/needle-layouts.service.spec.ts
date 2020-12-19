import { TestBed } from '@angular/core/testing';

import { NeedleLayoutsService } from './needle-layouts.service';

describe('NeedleLayoutsService', () => {
  let service: NeedleLayoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeedleLayoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
