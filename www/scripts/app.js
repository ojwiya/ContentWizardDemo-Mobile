'use strict';

/**
 * @ngdoc overview
 * @name contentwizardwebApp
 * @description
 * # contentwizardwebApp
 *
 * Main module of the application.
 */
angular
  .module('contentwizardwebApp', []);

'use strict';

/**
 * @ngdoc function
 * @name contentwizardwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contentwizardwebApp
 */
angular.module('contentwizardwebApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/wizard');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.wizard', {
        url: '/wizard',
        views: {
          'tab-wizard': {
            templateUrl: 'main/templates/wizard.html',
            controller: 'WizardCtrl as ctrl'
          }
        }
      })
      .state('main.user', {
        url: '/user',
        views: {
          // IMPORTANT: the name of the view for the sidemenu
          // starter template is 'pageContent' instead of 'tab-user'
          'tab-user': {
            templateUrl: 'main/templates/user.html',
            controller: 'UserCtrl as ctrl'
          }
        }
      });
});

'use strict';
angular.module('main')
.service('Wizard', function ($log) {

  $log.log('Hello from your Service: Wizard in module main');

   //  var deffered = $q.defer();
     
 //var cards = [
 //           {'id': 0, 'image': 'images/img00.jpg', 'content': 'Image 00'},
 //           {'id': 1, 'image': 'images/img01.jpg', 'content': 'Image 01'},
  //          {'id': 2, 'image': 'images/img02.jpg', 'content': 'Image 02'},
  //          {'id': 3, 'image': 'images/img03.jpg', 'content': 'Image 03'},
//            {'id': 4, 'image': 'images/img04.jpg', 'content': 'Image 04'}
 //       ];



});

'use strict';
angular.module('main')
.service('Main', function ($log, $timeout) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});

'use strict';
angular.module('main')
.filter('wizardStartFrom', function () {
     return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

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

'use strict';
angular.module('main')
.controller('WizardCtrl', function ($log) {

  $log.log('Hello from your Controller: WizardCtrl in module main:. This is your controller:', this);
 
 this.currentCard = {};
 this.currentIndex = 0;
 this.direction = 'left';
 this.currentPage = 0;
 this.pageSize = 5;
 
 this.cards = [
            {'id': 0, 'image': 'main/assets/images/img00.jpg', 'content': 'Image 00'},
            {'id': 1, 'image': 'main/assets/images/img01.jpg', 'content': 'Image 01'},
            {'id': 2, 'image': 'main/assets/images/img02.jpg', 'content': 'Image 02'},
            {'id': 3, 'image': 'main/assets/images/img03.jpg', 'content': 'Image 03'},
            {'id': 4, 'image': 'main/assets/images/img04.jpg', 'content': 'Image 04'}
        ];
 
  
     this.setCurrentSlideIndex = function (index) {
            this.direction = (index > this.currentIndex) ? 'left' : 'right';
            this.currentIndex = index;
        };

     this.isCurrentSlideIndex = function (index) {
            return this.currentIndex === index;
        };

      this.prevSlide = function () {
            this.direction = 'left';
            this.currentIndex = (this.currentIndex < this.cards.length - 1) ? ++this.currentIndex : 0;
        };

        this.nextSlide = function () {
            this.direction = 'right';
            this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.cards.length - 1;
        };
        
    this.numberOfPages = function(){
        return Math.ceil(this.cards.length / this.pageSize);                
    }


});

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

'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://DEVSERVER/api',
    'SOME_OTHER_URL': '/proxy'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});

'use strict';
angular.module('ContentWizard', [
  // load your modules here
  'main', // starting with the main module
]);
