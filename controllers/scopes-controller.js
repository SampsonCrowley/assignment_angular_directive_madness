directiveMadness.controller('ScopesCtrl', [
  '$scope', function($scope) {
    $scope.oneWay = "one way string";
    $scope.twoWay = "two way string";
    $scope.sayHello = function(name) {
      alert("Hello " + name);
    };
  }
]);
