import { TestBed } from '@angular/core/testing';

import { TwitchLoginService } from './twitch-login.service';

describe('TwitchLoginService', () => {
  let service: TwitchLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitchLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
