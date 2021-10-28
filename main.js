
function Capitalize(){
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}

function Capitalize2(){
    var x = document.getElementById("email");
    x.value = x.value.toUpperCase();
}

function Capitalize3(){
    var x = document.getElementById("address");
    x.value = x.value.toUpperCase();
}

function submitForm(){
    const allInputs = document.querySelectorAll('input');
    const textBox = document.querySelector('textarea');
    textBox.value = ""; 
    for(let i = 0; i < allInputs.length; i++){
        if(allInputs[i].value === "SEND"){
            continue
        }else{
            console.log(allInputs[i].value, allInputs[i].checked);
            allInputs[i].value = "";
            allInputs[i].checked = false;  
        }
    }
}