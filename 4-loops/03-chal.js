//* IF ELSE
let FB = 3;

if(FB % 3 == 0 $$ FB % 5 ==0){
    console.log ("Fizz Buzz");
} else if (FB % 5 == 0){
    console.log("Buzz");
}else if (FB % 3 == 0){
    console.log("fizz");
    else{
        console.log(FB)
    };
}

//* SWITCH
let FB = 30;

switch (true) {
    case (FB % 15 == 0):
        console.log("Fizz BUzz");
        break;
    case (FB % 5 == 0):
        console.log ("Buzz");
        break;
    case (FB % 3 == 0):
        console.log ("Fizz");
        break;


        //* Ternary

        let FB = 30:
        
        (FB % 15 == 0) ? console.log('Fizz BUzz'):
        (FB % 5 == 0 ) ? console.log("Buzz"):
        (FB % 3 == 0 ) ? console.log ("Fizz"):
        console.log (FB);



 for (i = 0 ; i <= 100 ; i++){
     if (i % 15 === 0){
         console.log('Fizz Buzz')
    
     }else if (i % 3 === 0){
         console.log('Fizz')
     } else if(i % 5 === 0){
         console.log('Buszz')
     } else {
         console.log(i)
     }
 }
