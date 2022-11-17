import { TestBed } from '@angular/core/testing';

import {InfoService } from './crud.service';

describe('CrudService', () => {
  let service: InfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
