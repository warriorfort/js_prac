
  
function getIndex(str,num)
{
                con = 0;
                   
	for(i =0;i<str.length;i++){
		count = 0;
    if(str.charAt(i)== num.charAt(0)){   
            
         // console.log("here");
            count ++;
            y = 1;
			for(j = 0;j<num.length-1;j++){
                console.log("here");
				if(str.charAt(j+i+1) == num.charAt(y)){
                    count ++;
                    y++;
				}
			}
   	}
       if(count == num.length) { 

        con ++;
        }
	}
	

console.log(con);
if(con >=2) 
{
    
return true;
}
else return false;

}
  
  var str = "121232313323213679890087";
  var substr = "12";


  console.log(getIndex(str,substr));