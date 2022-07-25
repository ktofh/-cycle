let number = 0;

leg: while (true){
    
   const question = prompt('break or continue');
    ref: switch (question) {

        case 'break': 
        break leg;
        break ref;

        case 'continue':
        
        break;
    }
    alert(number);
    number++;
}