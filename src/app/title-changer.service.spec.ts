import { TestBed } from '@angular/core/testing';

import { TitleChangerService } from './title-changer.service';

describe('TitleChangerService', () => {
  let service: TitleChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
