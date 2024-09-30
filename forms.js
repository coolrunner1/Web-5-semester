const setInvalid = (input) => {
    if (!input.classList.contains("invalid-input")){
        input.classList.add("invalid-input");
    }
}

const setValid = () => {
    const inputs = document.getElementsByClassName("invalid-input");
    [...inputs].forEach(input => {
        input.classList.remove("invalid-input");
    });
}

const validateElements = () => {
    let valid=true;
    const forms = document.forms["survey-form"];
    const inputs = forms.elements;
    [...inputs].forEach(input => {
        console.log(input.tagName)
        if (input.nodeName.toLowerCase()=="input"){
            if (input.value==""){
                setInvalid(input);
                valid=false;
            }
        }
    });
    return valid;
}

const validateNumber = () => {
    const input = document.forms["survey-form"]["number"];
    const x=input.value;
    if (!((x.startsWith("+7") || x.startsWith("+3")) && Number(x).toString().length>=9 && Number(x).toString().length<=11)) {
        setInvalid(input);
        alert("Номер должен содержать от 9 до 11 цифр и должен начинаться с +3 или +7!");
        return false;
    }
}

const validateName = () => {
    const input = document.forms["survey-form"]["name"];
    const x=input.value;
    if (x.split(" ").length!=3) {
        setInvalid(input);
        alert("Необходимо ввести ФИО полностью!");
        return false;
    }
}

document.getElementById("but2").onclick = () => {
    setValid();
    if (validateElements()){
        validateName();
        validateNumber();
    }
    setTimeout(() => {
        setValid();
    }, "5000");
      
};

document.getElementById("but3").onclick = () => {
    setValid();
};