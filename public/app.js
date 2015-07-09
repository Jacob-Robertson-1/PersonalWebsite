var app = angular.module("personalWebsite", ['ui.router', 'ngMaterial'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateprovider
    .state("bio", {
      templateUrl: "public/views/mainView.html"
      url: "mainCtrl"
    })



});
