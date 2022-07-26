let number = 1;

alert(number);
endlessCycle: while (true){
 
   const question = prompt('break or continue');
     switch (question) {

        case 'break': 
        break endlessCycle;
        break;

        case 'continue':
      console.log(number)
        break;
    }
    
    number++;
}