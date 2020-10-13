let name  = fname => {
    return "finn"
}

let myName = name();
console.log(nyName);



function tip (x){
    console.log(x * 0.20);
    return (x)
    
}
let money = tip();
//*console.log (money)

money(20);


function capitalizeNAme(name){
    let capName = '';
    for(l in name){
        if (l == 0){
            capName += name[l].toUpperCase();
        }else{
                capName += name[l].toLowerCase();
            }
        }
        return capName
    
    }

console.log(capitalizeNAme("derek"))


//* CHALLENGE

function tipCalc(bill){
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.72);
console.log(totalTip);