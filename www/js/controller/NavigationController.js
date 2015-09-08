angular.module('ionicApp', ['ionic','ui.router'])
.controller('NavCtrl',['$rootScope','$scope', function ($rootScope,$scope) {
    var HeaderMessages = ["Who are you?", "How you look?", "Any achivements?"];
    $scope.headerText = HeaderMessages[0];
        $scope.$on("changeHeaderText", function (event, args) {
            if (!!!parseInt(args.index * 1) && args.index != 0) {
                $scope.headerText = args.header;
            } else {
                $scope.headerText = HeaderMessages[args.index];
            }
    });
}]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('signup', {
        url: '/',
        templateUrl: '../partials/SignUp.html',
        controller: 'SignUpCtrl'
    })
    .state('editprofile', {
        url: '/editprofile',
        templateUrl: '../partials/EditProfile.html',
        controller: 'EditProfileCtrl'
    });
    $urlRouterProvider.otherwise("/");
})