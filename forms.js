const inputTags=["name", "email", "number", "question1"];

const validateEmailString = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const displayErrorMessage = (input, messageText) => {
    const overlay = document.createElement('div');
    overlay.id=input+"-error";
    overlay.classList.add('overlay');
    overlay.classList.add('overlay-error');
    const message=document.createElement('div');
    message.classList.add('content-box');
    message.classList.add('error-message');
    message.textContent = messageText;
    overlay.appendChild(message);
    document.getElementById(input+"-container").appendChild(overlay);
};

const removeErrorMessages = () => {
    inputTags.forEach(input => {
        const errorMessage=document.getElementById(input+"-error");
        if(errorMessage){
            errorMessage.remove();
        }
    })
};

const removeErrorMessage = (inputTag) => {
    const errorMessage=document.getElementById(inputTag+"-error");
    if(errorMessage){
        errorMessage.remove();
    }
};

const setInvalid = (input) => {
    if (input.classList.contains("valid-input")){
        input.classList.remove("valid-input");
    }
    if (!input.classList.contains("invalid-input")){
        input.classList.add("invalid-input");
    }
};

const setValid = (input) => {
    if (input.classList.contains("invalid-input")){
        input.classList.remove("invalid-input");
    }
    if (!input.classList.contains("valid-input")){
        input.classList.add("valid-input");
    }
    removeErrorMessage(input.getAttribute("id"));
};

const setValidElements = () => {
    const inputs = document.getElementsByClassName("invalid-input");
    [...inputs].forEach(input => {
        input.classList.remove("invalid-input");
        input.classList.remove("valid-input");
    });

    removeErrorMessages();
};

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
};

const validateNumber = () => {
    const input = document.forms["survey-form"]["number"];
    const x=input.value;
    if (!((x.startsWith("+7") || x.startsWith("+3")) && Number(x).toString().length>=9 && Number(x).toString().length<=11)) {
        setInvalid(input);
        displayErrorMessage("number", "Номер должен содержать от 9 до 11 цифр и начинаться с +3 или +7!");
        return false;
    }
    return true;
};

const validateName = () => {
    const input = document.forms["survey-form"]["name"];
    const x=input.value;
    if (x.split(" ").length!=3) {
        setInvalid(input);
        displayErrorMessage("name", "Необходимо ввести ФИО полностью!")
        return false;
    }
    return true;
};

const validateEmail = () => {
    const input = document.forms["survey-form"]["email"];
    if (!validateEmailString(input.value)) {
        setInvalid(input);
        displayErrorMessage("email", "Необходимо ввести корректный адрес почты!")
        return false;
    }
    return true;
};

const validateTest = () => {
    const question1 = document.getElementById("question1");
    let question2 = true;
    const question2Ch1 = document.getElementById("plane");
    const question2Ch2 = document.getElementById("bolt");
    const question2Ch3 = document.getElementById("vent");
    const question2Ch4 = document.getElementById("scissors");
    const question3 = document.getElementById("dropdown2");
    let erroneousAnswers = "";
    if (question1.value.toLowerCase()!="спецификация"){
        setInvalid(question1);
        displayErrorMessage("question1", "Неверный ответ");
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
    const result=document.getElementById("result");
    if (erroneousAnswers.length==1){
        result.textContent="Были допущены ошибки в задании "+erroneousAnswers;
    }
    else if (erroneousAnswers.length>1){
        result.textContent="Были допущены ошибки в заданиях "+erroneousAnswers;
    }
};

document.getElementById("but2").onclick = () => {
    setValidElements();
    if (validateElements()){
        validateName();
        validateNumber();
        validateEmail();
    }
    /*setTimeout(() => {
        setValidElements();
    }, "15000");*/
};

document.getElementById("but3").onclick = () => {
    setValidElements();
};

document.getElementById("name").onchange = () => {
    setValid(document.getElementById("name"));
    validateName();
};