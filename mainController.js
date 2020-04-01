var app = angular.module('MyApp', [])

app.controller('MainController', function(){
    this.name = 'ahmed'
})

app.directive('dropDownContent', function(){
    function link(scope, element, attrs) {
        let dropDown = element.parent()
        dropDown.bind('mouseover', function() {
            element.children(':first').css('display', 'block')
        })
        dropDown.bind('mouseleave', function(){
            element.children(':first').css('display', 'none')
        })
    }
    return {
        restrict: 'E',
        link: link,
        templateUrl: 'dropdown-content.html'
    }
})
