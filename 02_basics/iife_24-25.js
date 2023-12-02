// we need no pollution from global scope to remove the pollution we used iife
// when only database connection is done we need to invoke it immediatey (file to start immediately)
// function chai (){
//     console.log(`DB connected`);
// }
//chai()

// to immediately invoke this function we use 
// ()()


//named IIFE
(function chai (){
    console.log(`DB connected`);
})();
// |
//here () is same as chai('dhruv')

//iife doesnt know where to stop it so we use ; after completion


// a block is created automatically if parenthesis is used 


( () => {
    console.log(`DB connected`);
})();

// without ; it doesn't work error thrown to write two iife use ;


( (name) => {
    console.log(`DB connected by ${name}`);
})('dhruv')
