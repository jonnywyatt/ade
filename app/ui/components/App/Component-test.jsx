// ScatterPlot-test.jsx
var React = require('react/addons'),
  TestUtils = React.addons.TestUtils,
  expect = require('expect'),
  Component = require('./Component.jsx');

describe('ScatterPlot', function () {

  it("renders an h1", function () {
    var c = TestUtils.renderIntoDocument(
      <Component />
    );

    var d = TestUtils.findRenderedDOMComponentWithTag(
      c, 'div'
    );

    expect(d.getDOMNode().textContent).toEqual("Test");
  });
});
