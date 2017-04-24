(function(){
    "use strict";
    
    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("choreform").addEventListener("submit");
    });
    
    
    function choreGenerate(event){
        
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var choreList = ['Rock', 'Paper', 'Scissor'];
    var chore = choreList[Math.floor(Math.random()*choreList.length)];
    
        document.getElementById("randomOutput").value = chore;
        
    }
        
    })();
    
    



