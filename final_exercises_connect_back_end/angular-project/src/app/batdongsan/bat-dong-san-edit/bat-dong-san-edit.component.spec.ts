import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatDongSanEditComponent } from './bat-dong-san-edit.component';

describe('BatDongSanEditComponent', () => {
  let component: BatDongSanEditComponent;
  let fixture: ComponentFixture<BatDongSanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatDongSanEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatDongSanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
