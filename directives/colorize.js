directiveMadness.directive("colorize", [
  function(){
    function setColor(s, e, a){
      console.log(this)
      e.css({
        color: s.color,
        background: s.background
      })
    }

    return {
      restrict: 'A',
      scope:{
        color: '@',
        background: '@',
      },
      link: setColor
    }
  }
])
