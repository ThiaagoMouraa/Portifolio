

document.getElementById("click").addEventListener("click", function(event) {
    // event.preventDefault();  <-- Remova ou comente essa linha
    // alert("Formulário enviado com sucesso!");  <-- Opcional remover também
});

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const numberRegex = /^\d{10,11}$/;


function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display  = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display  = 'none';
}


function nameValidate(){
    if(campos[0].value.length < 3)
        {
            setError(0);
        }
    else{
            removeError(0);
    }

}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
        {
            setError(1);
        }
        else
        {
            removeError(1);
        }
}

function numberValidate(){
    if(!numberRegex.test(campos[2].value.trim())){
        setError(2);
    } else {
        removeError(2);
    }
}

