import { TestBed } from '@angular/core/testing';

import { GuiLibService } from './gui-lib.service';

describe('GuiLibService', () => {
  let service: GuiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
