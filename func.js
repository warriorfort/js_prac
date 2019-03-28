

function User (name,sex){

this.name = name;
this.sex = sex;

};

function Person (name,sex){

    this.name = name;
    this.sex = sex;
    
    };



    console.log(new User() )
let user = new User("jack","male");

console.log(user);

user = new User("karen","female");

console.log(user);
