import { TestBed } from '@angular/core/testing';

import { ProfileuesrService } from './profileuesr.service';

describe('ProfileuesrService', () => {
  let service: ProfileuesrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileuesrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
