import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavHecComponent } from './fav-hec.component';

describe('FavHecComponent', () => {
  let component: FavHecComponent;
  let fixture: ComponentFixture<FavHecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavHecComponent]
    });
    fixture = TestBed.createComponent(FavHecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
