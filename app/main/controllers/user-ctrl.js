'use strict';
angular.module('main')
.controller('UserCtrl', function ($log, $rootScope) {
 
 this.updateResult = function (type, result) {
    $log.log(result);
    this.user.resultType = type;
    this.user.result = result;
    $rootScope.$apply(); // $apply needed here for UI update
  };

  var responseCB = function (response) {
    this.updateResult('Response', response);
  }.bind(this);

  var rejectionCB = function (rejection) {
    this.updateResult('Rejection', rejection);

  }.bind(this);

  // tries to sign the user up and displays the result in the UI
  this.signup = function () {
    ionic.Auth.signup(this.user)
    .then(responseCB)
    .catch(rejectionCB);
  };
  // tries to sign in the user and displays the result in the UI
  this.signin = function () {
    ionic.Auth.login('basic', {'remember': true}, this.user)
    .then(responseCB)
    .catch(rejectionCB);
  };

});
