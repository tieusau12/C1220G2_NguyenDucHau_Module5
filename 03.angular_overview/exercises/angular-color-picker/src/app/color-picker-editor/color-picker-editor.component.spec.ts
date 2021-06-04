import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerEditorComponent } from './color-picker-editor.component';

describe('ColorPickerEditorComponent', () => {
  let component: ColorPickerEditorComponent;
  let fixture: ComponentFixture<ColorPickerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
