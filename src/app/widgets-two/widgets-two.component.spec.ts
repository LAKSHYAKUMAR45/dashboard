import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsTwoComponent } from './widgets-two.component';

describe('WidgetsTwoComponent', () => {
  let component: WidgetsTwoComponent;
  let fixture: ComponentFixture<WidgetsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
