import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergensDetailPage } from './allergens-detail.page';

describe('AllergensDetailsPage', () => {
  let component: AllergensDetailPage;
  let fixture: ComponentFixture<AllergensDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergensDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergensDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
