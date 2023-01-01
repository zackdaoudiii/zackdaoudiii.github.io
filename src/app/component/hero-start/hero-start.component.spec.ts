import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStartComponent } from './hero-start.component';

describe('HeroStartComponent', () => {
  let component: HeroStartComponent;
  let fixture: ComponentFixture<HeroStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
