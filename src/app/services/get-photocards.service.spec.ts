import { TestBed } from '@angular/core/testing';

import { GetPhotocardsService } from './get-photocards.service';

describe('GetPhotocardsService', () => {
  let service: GetPhotocardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPhotocardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
