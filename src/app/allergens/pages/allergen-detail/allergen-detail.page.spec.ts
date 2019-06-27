import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AllergenDetailPage } from './allergen-detail.page';

describe('AllergenDetailsPage', () => {
  let component: AllergenDetailPage;
  let fixture: ComponentFixture<AllergenDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergenDetailPage ],
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
    fixture = TestBed.createComponent(AllergenDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
