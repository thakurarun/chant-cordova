angular.module('ionicApp', ['ionic'])
.controller('EditProfileCtrl', function ($scope, $ionicSlideBoxDelegate) {
    var Profile = {};
    $scope.slideHasChanged = function (index) {
      //  $scope.items.push({ name: 'John', age: 25, gender: 'boy' });
        $ionicSlideBoxDelegate.update();
    };
    $scope.CheckInfo = function () { 
        console.log($scope.Profile.BriefHistory );
    };
    $scope.Profile = Profile;
});


