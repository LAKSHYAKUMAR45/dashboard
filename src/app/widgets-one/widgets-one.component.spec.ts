import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsOneComponent } from './widgets-one.component';

describe('WidgetsOneComponent', () => {
  let component: WidgetsOneComponent;
  let fixture: ComponentFixture<WidgetsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
