import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultpageComponent } from './adultpage.component';

describe('AdultpageComponent', () => {
  let component: AdultpageComponent;
  let fixture: ComponentFixture<AdultpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultpageComponent]
    });
    fixture = TestBed.createComponent(AdultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
