//* COnCISE BODY

let hi = () => console.log ("hi")

//* BLOCK BODY
let hi = () => {
    console.log ('hi');
}


//* COCISE vs BLOCK

let apples = x =>console.log(`there are ${x} apples`);

apples(10);

let apples = x =>{
    console.log(`there are ${x} apples`)
}
apples(6);
