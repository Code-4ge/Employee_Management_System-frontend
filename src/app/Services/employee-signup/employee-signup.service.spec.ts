import { TestBed } from '@angular/core/testing';

import { EmployeeSignupService } from './employee-signup.service';

describe('EmployeeSignupService', () => {
  let service: EmployeeSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
