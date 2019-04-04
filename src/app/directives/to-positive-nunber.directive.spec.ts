import { TestBed } from '@angular/core/testing';
import { ToPositiveNumberDirective } from './to-positive-number.directive';

describe('ToPositiveNumberDirective', () => {
  const directive = new ToPositiveNumberDirective();
  const mock_9 = {
    currentTarget: { value: '9' },
    key: '9'
  };
  const mock_M = {
    currentTarget: { value: 'm' },
    key: 'm'
  };
  const mock_negative = {
    currentTarget: { value: '-' },
    key: '-'
  };

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ ToPositiveNumberDirective ],
    } );
    directive['arrValues'] = [];
  } );

  it( '0 directive param is "9" then directive.arrValues = 9 ', () => {
    directive['numberPositive'](mock_9);
    expect(directive['arrValues'][0]).toBe('9');
  } );

  it('1 directive param is NaN then directive.arrValues = undefined', () => {
    directive['numberPositive'](mock_M);
    expect(directive['arrValues'][0]).toBeUndefined();
  });

  it('2 directive.arrValues is "99" then press "-" and the value still is 99 ', () => {
    directive['arrValues'].push('99');
    directive['numberPositive'](mock_negative);
    expect(directive['arrValues'].join('')).toBe('99');
  });

  it('3 directive.arrValues = 99 then press "m" and the value still is 99 ', () => {
    directive['arrValues'].push('99');
    directive['numberPositive'](mock_M);
    expect(directive['arrValues'].join('')).toBe('99');
  });

});
