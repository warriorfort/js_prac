  

let user = {};


user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;
delete user.surname;

console.log(user);


function isEmpty(object) {

    
let propsize =0;
for (const key in object) {

    if (object.hasOwnProperty(key)) {
        const element = object[key];
    propsize ++;

        
    }
}
if (propsize === 0 ){ return false;}
return true;

}

function multiplyNumeric(object) {

    for (let key in object) {
    

        
        if (typeof object[key] === "number") {
         
            object[key] = 2*object[key];
        
        }
    }
    }
    // before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
    console.log(menu);
    multiplyNumeric(menu);
    console.log(menu);
console.log(isEmpty(user));

