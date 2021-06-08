import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePieComponent } from './pie-pie.component';

describe('PiePieComponent', () => {
  let component: PiePieComponent;
  let fixture: ComponentFixture<PiePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
