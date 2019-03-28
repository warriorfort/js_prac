// // filter

// function filterRange(arr,a,b)
// {
//        return arr.filter((item) => (item >=a && item <=b)) ;
 
// }


// let arr2 = [5, 3, 8, 1];

// console.log(filterRange(arr2,1,4));

// // sort
// let arr = [5, 2, 1, -10, 8];

// console.log(arr.sort((a,b) => (a-b)));

// //copysorted

// function copySorted(arr)
// {
//   ///  let clone = Object.assign({},arr);

//   let clone =arr.slice(0,arr.length)
 
//     clone.sort();
//     return clone;

// }
// let arr5 = ["HTML", "JavaScript", "CSS"];

//     console.log(arr5);
//     console.log(copySorted(arr5));
//     console.log(arr5);


//     let arrm = [7,77,87,98];

//     console.log(arrm.slice(0,arrm.length));

//   function mapname (arr)
//   {

//     return  arr.map(item => ({

//        fullName : item.name +" "+item.surname,
//        id : item.id

//     }));


//   }  

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// console.log(mapname(users));

//sort objects

// function sortobj(itema,itemb)
// {

//   if (itema.name > itemb.name )return 1;
//   if (itema.name < itemb.name )return -1;
//   return 0;
// }

// function sortByName(arr)
// {

//  return arr.sort( sortobj)

// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr9 = [ john, pete, mary ];

// console.log(sortByName(arr9));

function unique(arr) {
  /* your code */

  let result = [];
arr.forEach(element => {

   console.log(element);
    result[element]++;
  
});



return result;

}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

for (key in (unique(strings)) )
{
  console.log(key);
}