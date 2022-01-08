import { TestBed } from '@angular/core/testing';

import { PublicServiceInterceptor } from './public-service.interceptor';

describe('PublicServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PublicServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PublicServiceInterceptor = TestBed.inject(PublicServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
