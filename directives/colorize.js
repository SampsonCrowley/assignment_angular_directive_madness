directiveMadness.directive("colorize", [
  function(){
    function setColor(s, e, a){
      e.css({
        color: s.color,
        background: s.background || 'initial'
      });
    }

    return {
      restrict: 'A',
      scope:{
        color: '@',
        background: '@',
      },
      link: setColor
    };
  }
]);
