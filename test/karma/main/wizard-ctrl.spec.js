'use strict';

describe('module: main, controller: WizardCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var WizardCtrl;
  beforeEach(inject(function ($controller) {
    WizardCtrl = $controller('WizardCtrl', {});
    WizardCtrl.currentIndex = 1;

  }));

  it('should do something', function () {
    expect(!!WizardCtrl).toBe(true);
  });
  
   it('should set the index of the next image', function() {
        WizardCtrl.nextSlide();
        expect(WizardCtrl.direction).toBe('right');
        expect(WizardCtrl.currentIndex).toBe(0);
    });

   it('should set the index of the  previous image', function() {
        WizardCtrl.prevSlide();
        expect(WizardCtrl.direction).toBe('left');
        expect(WizardCtrl.currentIndex).toBe(2);
    });
    

});
