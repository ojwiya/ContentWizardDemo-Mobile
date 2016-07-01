'use strict';

describe('module: main, controller: WizardCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var WizardCtrl;
  beforeEach(inject(function ($controller) {
    WizardCtrl = $controller('WizardCtrl');
  }));

  it('should do something', function () {
    expect(!!WizardCtrl).toBe(true);
  });

});
