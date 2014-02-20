angular.module('example', ['ngTokensField'])
.controller('MainCtrl', ['$scope', function($scope) {
    $scope.tags = [
        'AngularJS',
        'Directive',
        'Tokens Field'
    ];
}]);