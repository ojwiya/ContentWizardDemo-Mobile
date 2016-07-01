'use strict';

describe('module: main, service: Wizard', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Wizard;
  beforeEach(inject(function (_Wizard_) {
    Wizard = _Wizard_;
  }));

  it('should do something', function () {
    expect(!!Wizard).toBe(true);
  });

});
