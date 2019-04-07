import { TestBed } from '@angular/core/testing';
import { ToPositiveNumberDirective } from './to-positive-number.directive';
import { Mock } from './to-positive-number.directive.mock';

describe('ToPositiveNumberDirective', () => {
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
    eventMock = Mock.mock_9();
    expected = Mock.mock_9();
    directive['numberPositive'](eventMock);
    expect(eventMock.currentTarget.value).toBe(expected.currentTarget.value);
  } );

  it('should does not accept non-number keys', () => {
    eventMock = Mock.mock_M();
    expected = Mock.mock_M();
    directive['numberPositive'](eventMock);
    expect(eventMock.currentTarget.value).not.toBe(expected.currentTarget.value);
  });
});
