import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BatDongSanListComponent} from './bat-dong-san-list.component';

describe('BatDongSanComponent', () => {
  let component: BatDongSanListComponent;
  let fixture: ComponentFixture<BatDongSanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatDongSanListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatDongSanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
