import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenuinelyLikeComponent } from './genuinely-like.component';

describe('GenuinelyLikeComponent', () => {
  let component: GenuinelyLikeComponent;
  let fixture: ComponentFixture<GenuinelyLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenuinelyLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenuinelyLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
