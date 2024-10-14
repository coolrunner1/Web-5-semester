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
        input.value="";
        input.placeholder="Номер должен содержать от 9 до 11 цифр и начинаться с +3 или +7!";
        return false;
    }
}

const validateName = () => {
    const input = document.forms["survey-form"]["name"];
    const x=input.value;
    if (x.split(" ").length!=3) {
        setInvalid(input);
        input.value="";
        input.placeholder="Необходимо ввести ФИО полностью!";
        return false;
    }
}

const validateTest = () => {
    const question1 = document.getElementById("question1");
    var question2 = true;
    const question2Ch1 = document.getElementById("plane");
    const question2Ch2 = document.getElementById("bolt");
    const question2Ch3 = document.getElementById("vent");
    const question2Ch4 = document.getElementById("scissors");
    const question3 = document.getElementById("dropdown2");
    let erroneousAnswers = "";
    if (question1.value.toLowerCase()!="спецификация"){
        setInvalid(question1);
        question1.value="";
        question1.placeholder="Неверный ответ"
        erroneousAnswers+="1";
    }
    if (question2Ch1.checked){
        setInvalid(document.getElementById("plane-label"))
        question2=false;
    }
    if (!question2Ch2.checked){
        setInvalid(document.getElementById("bolt-label"));
        console.log(document.getElementById("bolt-label"))
        question2=false;
    }
    if (!question2Ch3.checked){
        setInvalid(document.getElementById("vent-label"));
        question2=false;
    }
    if (question2Ch4.checked){
        setInvalid(document.getElementById("scissors-label"));
        question2=false;
    }
    if (!question2){
        if (erroneousAnswers!=""){
            erroneousAnswers+=", ";
        }
        erroneousAnswers+="2";
    }
    if (question3.value!="Прямые линии"){
        setInvalid(question3);
        if (erroneousAnswers!=""){
            erroneousAnswers+=", ";
        }
        erroneousAnswers+="3";
    }
    result=document.getElementById("result");
    if (erroneousAnswers.length==1){
        result.textContent="Были допущены ошибки в задании "+erroneousAnswers;
    }
    else if (erroneousAnswers.length>1){
        result.textContent="Были допущены ошибки в заданиях "+erroneousAnswers;
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

document.getElementById("but4").onclick = () => {
    setValid();
    if (validateElements()){
        validateName();
        validateTest();
    }
};