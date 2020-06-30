function AppCtrl($scope, $http){
    console.log("Hello world from controller");

    //route to get the data from 
    $http.get('/contactlist').success(function(response){
        console.log("Angular recevived the requested data")
        $scope.contactlist = response;
    })

   
    
}