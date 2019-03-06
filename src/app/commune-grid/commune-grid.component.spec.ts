import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneGridComponent } from './commune-grid.component';

describe('CommuneGridComponent', () => {
  let component: CommuneGridComponent;
  let fixture: ComponentFixture<CommuneGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuneGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuneGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
