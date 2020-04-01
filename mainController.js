var app = angular.module('MyApp', [])

app.controller('MainController', function(){
    this.name = 'ahmed'
})

app.directive('dropDownContent', function(SendRequest){
    function link(scope, element, attrs) {
        let dropDown = element.parent()
        dropDown.bind('mouseenter', function() {
            let response = SendRequest.sendRequest()
            response.then((res)=> {
                console.log(res)
            })
        
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

app.service('SendRequest', ['$http', function($http){
    this.sendRequest = ()=> {
        console.log('sendRequest called')
        return $http.get('http://localhost/Dropdowun%20example/data.json')
    }
}])
