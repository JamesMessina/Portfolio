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

    for(let i = 0; i < allInputs.length; i++){
        if(allInputs[i].value === "SEND"){
            continue
        }else{
            allInputs[i].value = "";
            allInputs[i].checked = false; 
            const textBox = document.querySelector('textarea'); 
            textBox.value = ""; 
        }
    }
}

function goBack() {
    window.location='./contactme.html'
}