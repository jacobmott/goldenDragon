import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoardComponent } from './hoard.component';

describe('HoardComponent', () => {
  let component: HoardComponent;
  let fixture: ComponentFixture<HoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
