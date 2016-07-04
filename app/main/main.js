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
