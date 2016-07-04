'use strict';
angular.module('main')
.filter('wizardStartFrom', function () {
     return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
