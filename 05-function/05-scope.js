let x = 12;

function scope(){
    let x = 33;
    console.log(x);
}
scope();
console.log (x);

let y = 12;

function scope(){
    y = 33;
    console.log(y);
}
scope();
console.log(y);
//* uses let to change varable

//* VAR vs LET
//*Var is scoped to the nearest function block and Let is scoped to the nearest enclosing block.

var x = 12;

function varTest(){
    var x = 33;
    if (1 = 1){
        var x = 45
        console.log(x);
    }
    console.log(x);
}
varTest()
console.log(x);


let x = 12;

function letTest(){
    var x = 33
    if (1 == 1) {
        let x = 45;
        console.log(x)
    }
    console.log(x);
}

letTest();
console.log(x);



git add  <----- Stages files to be comitted

git status  <-------- Shows diff between last commit and now

git init   <-----------Creates a .git folder and makes a repo (only do this one time per repo)

git commit -m "" <------------takes the staged state and saves it

git help <-------- list git argument

git push (origin Master)  <---------- this tells git to push changes

 