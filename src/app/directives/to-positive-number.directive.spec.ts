import { TestBed } from '@angular/core/testing';
import { ToPositiveNumberDirective } from './to-positive-number.directive';

describe('ToPositiveNumberDirective', () => {
  const mockValidTarget = { value: '19'};
  const mockNotValidTarget = { value: 'm'};

  const mock_9 = () => ({
    currentTarget: { ...mockValidTarget },
    key: '9'
  });
  const mock_M = () => ({
    currentTarget: { ...mockNotValidTarget },
    key: 'm',
    preventDefault: () => false
  });
  let directive;
  let eventMock;
  let expected;

  beforeEach( () => {
    directive = new ToPositiveNumberDirective();
    TestBed.configureTestingModule( {
      declarations: [ ToPositiveNumberDirective ],
    } );
  } );

  it( 'should accept number keys', () => {
    eventMock = mock_9();
    expected = mock_9();
    directive['numberPositive'](eventMock);
    expect(eventMock.currentTarget.value).toBe(expected.currentTarget.value);
  } );

  it('should does not accept non-number keys', () => {
    eventMock = mock_M();
    expected = mock_M();
    directive['numberPositive'](eventMock);
    expect(eventMock.currentTarget.value).not.toBe(expected.currentTarget.value);
  });
});
