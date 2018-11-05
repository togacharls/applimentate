import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlutenComponent } from './gluten.component';

describe('GlutenComponent', () => {
  let component: GlutenComponent;
  let fixture: ComponentFixture<GlutenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlutenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlutenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
