import { TestBed } from '@angular/core/testing';

import { AllergensService } from './allergens.service';

describe('AllergensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllergensService = TestBed.get(AllergensService);
    expect(service).toBeTruthy();
  });
  it('should return a fourteen elements list', () => {
      const service: AllergensService = TestBed.get(AllergensService),
          allergensList = service.getList();
      expect(allergensList.length).toBe(14);
  });
    it('should return the correct path and filename of each allergen icon', () => {
        const service: AllergensService = TestBed.get(AllergensService),
            allergensList = service.getList(),
            filterFunction = (allergenItem, expectedFilename) => allergenItem.imgSrc === `../../../assets/icon/${expectedFilename}.png`;
        expect(allergensList.filter(item => filterFunction(item, 'altramuces')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'apio')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'cacahuetes')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'crustaceos')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'dioxido_de_azufre_y_sulfitos')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'frutos_secos')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'gluten')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'granos_de_sesamo')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'huevo')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'lacteos')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'moluscos')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'mostaza')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'pescado')).length).toBe(1);
        expect(allergensList.filter(item => filterFunction(item, 'soja')).length).toBe(1);
    });
});
