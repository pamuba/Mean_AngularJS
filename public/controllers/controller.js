function AppCtrl($scope, $http){
    console.log("Hello world from controller");

    //route to get the data from 
    $http.get('/contactlist').success(function(response){
        console.log("Angular recevived the requested data")
        $scope.contactlist = response;
    });

    $scope.addContact = function(){
        console.log($scope.contact)
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response)
        })
    }
}