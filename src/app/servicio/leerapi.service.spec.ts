import { TestBed } from '@angular/core/testing';

import { LeerapiService } from './leerapi.service';

describe('LeerapiService', () => {
  let service: LeerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
