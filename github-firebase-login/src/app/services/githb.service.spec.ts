import { TestBed } from '@angular/core/testing';

import { GithbService } from './githb.service';

describe('GithbService', () => {
  let service: GithbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
