import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkComponentComponent } from './mywork-component.component';

describe('MyworkComponentComponent', () => {
  let component: MyworkComponentComponent;
  let fixture: ComponentFixture<MyworkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyworkComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyworkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
