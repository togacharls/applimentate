import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenSummaryPage } from './allergen-summary.page';

describe('AllergenSummaryPage', () => {
  let component: AllergenSummaryPage;
  let fixture: ComponentFixture<AllergenSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergenSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
