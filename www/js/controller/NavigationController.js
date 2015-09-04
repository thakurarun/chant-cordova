angular.module('ionicApp')
.controller('NavCtrl',['$rootScope','$scope', function ($rootScope,$scope) {
    var HeaderMessages = ["Who are you?", "How you look?", "Any achivements?"];
    $scope.headerText = HeaderMessages[0];
    $scope.$on("changeHeaderText", function (event, args) { 
        $scope.headerText = HeaderMessages[args.index];
    });
}]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('editprofile', {
        url: '/',
        views: {
            editprofile: {
                templateUrl: '../partials/EditProfile.html',
                controller: 'EditProfileCtrl'
            }
        }
    });
    $urlRouterProvider.otherwise("/");
})