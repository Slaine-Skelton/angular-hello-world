import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeHelpComponent } from './college-help.component';

describe('CollegeHelpComponent', () => {
  let component: CollegeHelpComponent;
  let fixture: ComponentFixture<CollegeHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
