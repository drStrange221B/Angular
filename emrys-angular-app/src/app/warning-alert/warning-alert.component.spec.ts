import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlartComponent } from './warning-alert.component';

describe('WarningAlartComponent', () => {
  let component: WarningAlartComponent;
  let fixture: ComponentFixture<WarningAlartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAlartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
