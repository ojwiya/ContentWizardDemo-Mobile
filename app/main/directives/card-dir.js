'use strict';
angular.module('main')
.directive('card', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink (scope, element, attrs) {
      element.text('this is the card directive', attrs);
    }
  };
});
