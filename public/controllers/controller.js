function AppCtrl(){
    console.log("Hello world from controller");

    person1 = {
        name:"Jack",
        email:"jack@gmail.com",
        number:'(111) 111-1111'
    };
    person2 = {
        name:"Emily",
        email:"emily@gmail.com",
        number:'(222) 222-2222'
    };
    person3 = {
        name:"John",
        email:"john@gmail.com",
        number:'(333) 333-3333'
    };

    var contactlist = [person1, person2, person3]
    $scope.contactlist = contactlist;
}