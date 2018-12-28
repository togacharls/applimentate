import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AllergensPage } from './allergens.page';

describe('AllergensPage', () => {
  let component: AllergensPage;
  let fixture: ComponentFixture<AllergensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergensPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should contain fourteen allergens', () => {
        expect(component.allergens).not.toBeNull();
        expect(component.allergens.length).toBe(14);
    });
});
