directiveMadness.directive("copyright", [
  function(){

    function copyrightYear(scope, element, atrributes){
      var p = angular.element(element.children()[0])
      var year = angular.element(p.children('.year')[0])
      var date = new Date().getFullYear();
      year.text(date);
    }

    return {
      restrict: 'E',
      scope:{},
      templateUrl: '/directives/copyright.html',
      link: copyrightYear,
      transclude:true
    }
  }
])
