angular.module('ionicApp', ['ionic','ui.router'])
.controller('NavCtrl',['$rootScope','$scope', function ($rootScope,$scope) {
    var HeaderMessages = ["Who are you?", "How you look?", "Any achivements?"];
    $scope.headerText = HeaderMessages[0];
        $scope.$on("changeHeaderText", function (event, args) {
            if (!!!parseInt(args.index * 1)) {
                $scope.headerText = args.header;
            } else {
                $scope.headerText = HeaderMessages[args.index];
            }
    });
}]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('editprofile', {
        cache: false,
        url: '/editprofile',
        views: {
            editprofile: {
                templateUrl: '../partials/EditProfile.html',
                controller: 'EditProfileCtrl',
                cache: false
            }
        }
    })
    .state('signup', {
        url: '/signup',
        views: {
            signup: {
                templateUrl: '../partials/SignUp.html',
                controller: 'SignUpCtrl'
            }
        }
    })
    $urlRouterProvider.otherwise("/signup");
})