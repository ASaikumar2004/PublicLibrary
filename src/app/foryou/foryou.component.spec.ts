import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForyouComponent } from './foryou.component';

describe('ForyouComponent', () => {
  let component: ForyouComponent;
  let fixture: ComponentFixture<ForyouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForyouComponent]
    });
    fixture = TestBed.createComponent(ForyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
