function search (arr,key)
{

   let found  = false ;
   arr.forEach(element => {
      
    console.log(element);

    try {

           if(typeof key  == "number")
           {
        if(element == key) {
         
            found = true;
        return true;
       
    }
}
      else
      throw new Error("type mismatch");

        
    } catch (error) {

        console.log(error.message);
        
    }

    finally{

        console.log("in finally block");
    }


  });

//   try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 100);
//   } catch (e) {
//     console.log( "won't work" );
//   }

  setTimeout(function() {
    try {
      noSuchVariable; // try..catch handles the error!
    } catch (e) {
        console.log( "error is caught here!" );
    }
  }, 1000);

 return found;

}


let arr = [22,5,78,8,9,90,288];

let key = 9;

const str = "game";

let student = {

    name : "john",
    std  : "tenth"

};

console.log(student);

console.log(search(arr,key));