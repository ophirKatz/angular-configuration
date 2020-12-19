import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedleLayoutsComponent } from './needle-layouts.component';

describe('NeedleLayoutsComponent', () => {
  let component: NeedleLayoutsComponent;
  let fixture: ComponentFixture<NeedleLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedleLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedleLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
