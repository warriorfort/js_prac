let arr  = [];


arr = [
{
    name : "meera",
    age  : 22
},
{
    name : "raghav",
    age  : 22
},
{
    name : "ranveer",
    age  : 27
}

]

arr.pop();

console.log(arr);


let sum = (a,b) => a+b;

console.log(sum(500,70));

let person = arr.findIndex( item => item.age == 22);

console.log(person);

// let per = arr.filter( item => item.age == 22);

// console.log(per.length);

let per = arr.map( item => item.age);

console.log(arr);



// array sort The items are sorted as strings by default.

//To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.


let arrnum = [57,8,9,0,-899,22];

function sortnum(a,b)
{
    // if(a>b)  {return 1; }
    // if(a==b) {return 0;}
    // if(a<b) return -1;

    return a-b ;
}

console.log(arrnum.sort((a,b)=>b-a));

//split and join

let friends = 'mary%john%eva%carm' ;

console.log(friends.split("%"));

