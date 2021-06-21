import {TestBed} from '@angular/core/testing';

import {BatDongSanService} from './bat-dong-san.service';

describe('BatDongSanService', () => {
  let service: BatDongSanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatDongSanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
