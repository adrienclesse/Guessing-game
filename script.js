(function () {

    document.getElementById("submit").addEventListener("click",function() {
        
     
        var userNumber = document.getElementById("here").value;
        alert("You've chose the number " + userNumber);    

       
    
            let randomNum;

            function getRandomNum(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                randomNum=( Math.floor(Math.random() * (max - min) + min));
                return randomNum
                 //The maximum is exclusive and the minimum is inclusive
                                
                }
                
                 getRandomNum(1,22);
                 

                 console.log(typeof randomNum);
                 console.log(typeof userNumber);

                 

                
                 if (randomNum==userNumber) {alert("you won! It was the right number");}
                   else if(randomNum-userNumber==1||randomNum-userNumber==-1) {alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?")}
                   else { alert("you've lost, the nmber was " + randomNum)};
                    
                  
                 
    });       
            

    
             
})();





