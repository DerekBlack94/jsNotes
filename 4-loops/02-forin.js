let student = {
    name: "derek",
    Awsome: true,
    week: 1
}//So “in” means that we are referring to the values held inside the object?
 

let name =" Derek Black"

for (letters in name );{ 
    console.log (letters.Uppercase)
}
let capName;

for (let i in name)(
    if (i = 0){
        capName = name[i].Uppercase();

    } else {
        capName += name[i].toLowerCase();
    }
)