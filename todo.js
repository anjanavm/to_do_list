
 getList=()=>{
   fetch("https://jsonplaceholder.typicode.com/todos").then(
        res=>{
          res.json().then(
            data=>{
              console.log(data);
              if(data.length>0){
                var temp="";
                var c="";
                data.forEach((u)=>{
                  temp+="<tr>";
                  temp+="<td>"+u.id+"</td>";
                  temp+="<td>"+u.title+"</td>";
                  c=u.completed;
                   var uncheckedOnLoad=0;
                  if(c==false)
                  {
    

                     
                    temp+= `<td><input type="checkbox" oninput="checkChange()" id="bt" id="checkBox${uncheckedOnLoad}"></td>`;
                  }
                  else{
                    temp+= `<td><input type="checkbox" checked disabled onchange="checkChange()"></td>`;
    
                    
                      uncheckedOnLoad+=1;
                    }
                    temp+= "</tr>";
                })
                document.getElementById("progress").setAttribute("hidden", true);
               
    
                document.getElementById("data").innerHTML=temp;
              }
            }
            
          )
     })
    
    }
    getList();
    
    
     var storeCount = 0; 
    
    
     function checkChange() {
         var promise = new Promise((resolve, reject)=> {
             var checkCount = 0;
     
            
             for (var i = 0; i < uncheckedOnLoad; i++) {
                 if ((document.getElementById("checkBox" + i)).checked == true) {
                     checkCount += 1;
                 }
             }
     
            
             if (checkCount == 5 && storeCount < 5) {
                 resolve();
             }
             
         });
         promise.then(()=> {
             
                 alert("Congrats! 5 Tasks have been Successfully Completed!");
             
         });
     }