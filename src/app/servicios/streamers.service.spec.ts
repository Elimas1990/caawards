import { TestBed } from '@angular/core/testing';

import { StreamersService } from './streamers.service';

describe('StreamersService', () => {
  let service: StreamersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
