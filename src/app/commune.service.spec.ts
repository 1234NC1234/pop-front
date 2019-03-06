import { TestBed, inject } from '@angular/core/testing';

import { CommuneService } from './commune.service';

describe('CommuneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommuneService]
    });
  });

  it('should be created', inject([CommuneService], (service: CommuneService) => {
    expect(service).toBeTruthy();
  }));
});
