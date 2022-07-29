import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALoginComponent } from './alogin.component';

describe('ALoginComponent', () => {
  let component: ALoginComponent;
  let fixture: ComponentFixture<ALoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
