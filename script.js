
let listaspesa = ["latte", "cereali", "pane", "pasta", "insalata", "frutta",];

/*
let listaspesa = ["latte","cereali","pane","pasta","insalata","frutta",]

for(let i = 0; i<listaspesa.length; i++){
    console.log(listaspesa[i]);
}

let i=0
while(i<listaspesa.length){
    console.log(listaspesa[i]);
    i++;
}

*/


let i=0
while(i<listaspesa.length){

    document.getElementById("ul").innerHTML +="<li>" + listaspesa[i] + "</li>";
    i++;
}






