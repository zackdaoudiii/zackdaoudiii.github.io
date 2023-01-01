import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescompComponent } from './servicescomp.component';

describe('ServicescompComponent', () => {
  let component: ServicescompComponent;
  let fixture: ComponentFixture<ServicescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicescompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
