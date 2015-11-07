jest.dontMock('../button');

describe('Button component', function () {

  it('calls handler function on click', function () {
    var React = require('react');
    var TestUtils = require('react-addons-test-utils');
    var Button = require('../button');
    var handleClick = jest.genMockFunction();

    var button = TestUtils.renderIntoDocument(
      <Button handleClick={handleClick} />
    );

    // Button should call a click handler
    var buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    TestUtils.Simulate.click(buttonInstance);
    expect(handleClick).toBeCalled();

    // But it should only call it once
    var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
    expect(numberOfCallsMadeIntoMockFunction).toBe(1);
  });
  
});
