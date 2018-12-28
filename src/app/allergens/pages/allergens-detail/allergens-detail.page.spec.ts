import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergensDetailPage } from './allergens-detail.page';

describe('AllergensDetailsPage', () => {
  let component: AllergensDetailPage;
  let fixture: ComponentFixture<AllergensDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergensDetailPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ TranslateModule.forRoot() ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: {
              id: 'ALLERGENS.GLUTEN'
            }
          }
        }
      }]
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
