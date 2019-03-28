let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


  function traverse (list)
  {

    while(list.next != null)
    {
        list = list.next;
        console.log(list.next);
        console.log(list.value);
       
    }



  }

  function fact (n)
  {
      if (n <=1)
      {
          return 1;
      }

      else return n*fact(n-1);
  }
  console.log(fact());

  traverse (list);
