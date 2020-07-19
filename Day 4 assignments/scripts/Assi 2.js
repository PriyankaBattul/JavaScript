let student = {
         name:'Helsinki',
         age:24,
        
         projects : {
             diceGame:'Two Player dice using JavaScript',
             
         },
     }
    
     console.log(student.name);
     console.log(student.age);

     const {name , age , projects:{diceGame}} = student;
     console.log(name, age, diceGame)