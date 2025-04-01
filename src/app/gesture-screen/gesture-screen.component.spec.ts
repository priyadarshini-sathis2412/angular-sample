import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureScreenComponent } from './gesture-screen.component';

describe('GestureScreenComponent', () => {
  let component: GestureScreenComponent;
  let fixture: ComponentFixture<GestureScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
