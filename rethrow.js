function readData() {
  let json = '{ "age"30 }';

  try {
    

    let user = JSON.parse(json);

    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }


    blabla(); // error!
  } catch (e) {
    // ...

    if(e.name ==='SyntaxError' )
    {
        console.log(e.message);
    }
    if (e.name != 'SyntaxError') {
      throw e; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (e) {
  console.log( "External catch got: " + e ); // caught it!
}