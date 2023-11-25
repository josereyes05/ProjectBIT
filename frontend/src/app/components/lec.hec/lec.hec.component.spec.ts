import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecHecComponent } from './lec.hec.component';

describe('LecHecComponent', () => {
  let component: LecHecComponent;
  let fixture: ComponentFixture<LecHecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LecHecComponent]
    });
    fixture = TestBed.createComponent(LecHecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
