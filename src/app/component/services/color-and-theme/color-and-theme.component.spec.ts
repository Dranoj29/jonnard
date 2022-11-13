import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAndThemeComponent } from './color-and-theme.component';

describe('ColorAndThemeComponent', () => {
  let component: ColorAndThemeComponent;
  let fixture: ComponentFixture<ColorAndThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAndThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAndThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
