import { TestBed } from '@angular/core/testing';

import { WakeUpHerokuService } from './wake-up-heroku.service';

describe('WakeUpHerokuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WakeUpHerokuService = TestBed.get(WakeUpHerokuService);
    expect(service).toBeTruthy();
  });
});
