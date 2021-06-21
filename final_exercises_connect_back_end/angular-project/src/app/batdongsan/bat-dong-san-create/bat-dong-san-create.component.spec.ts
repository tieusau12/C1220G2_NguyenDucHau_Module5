import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BatDongSanCreateComponent} from './bat-dong-san-create.component';

describe('BatDongSanCreateComponent', () => {
  let component: BatDongSanCreateComponent;
  let fixture: ComponentFixture<BatDongSanCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatDongSanCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatDongSanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
