import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceInputComponent } from './debounce-input.component';

describe('DebounceInputComponent', () => {
  let component: DebounceInputComponent;
  let fixture: ComponentFixture<DebounceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
