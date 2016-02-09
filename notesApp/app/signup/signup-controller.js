(function(){
    /*
        angular has a module function where you pass in NotesApp as a parameter.
        Now, the module function has a method called controller, the parameters here
        are the the name (presumeably) 'SignUpController', as well as an array containing
        two vars and a function passing them in.

        Additionally, on signup.html, when the user clicks the submit button, the data
        will be posted to the createUser function found here.
    */
    angular.module('NotesApp')
    .controller('SignUpController', ['$scope', '$state', '$http', function($scope, $state, $http){
        $scope.createUser = function(){
            console.log($scope.newUser);
            $http.post('api/user/signup', $scope.newUser).success(function(response){

            }).error(function(error){
                console.log(error);
            })
        }
    }])
}());
