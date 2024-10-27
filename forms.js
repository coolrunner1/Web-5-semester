const inputTags=["name", "email", "number", "question1"];

const validateEmailString = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const displayErrorMessage = (input, messageText) => {
    const overlay = $('<div id="'+input+'-error" class="overlay overlay-error">' +
        '<div class="content-box error-message">'+messageText+'</div></div>');
    $("#"+input+"-container").append(overlay);
};

const removeErrorMessages = () => {
    inputTags.forEach(input => {
        const errorMessage=$("#"+input+"-error");
        if(errorMessage.length){
            errorMessage.remove();
        }
    })
};

const removeErrorMessage = (inputTag) => {
    const errorMessage=$("#"+inputTag+"-error");
    if(errorMessage){
        errorMessage.remove();
    }
};

const setInvalid = (input) => {
    if (input.hasClass("valid-input")){
        input.removeClass("valid-input");
    }
    if (!input.hasClass("invalid-input")){
        input.addClass("invalid-input");
    }
};

const setValid = (input) => {
    if (input.hasClass("invalid-input")){
        input.removeClass("invalid-input");
    }
    if (!input.hasClass("valid-input")){
        input.addClass("valid-input");
    }
    removeErrorMessage(input.attr('id'));
};

const setValidElements = () => {
    const inputs = $(".invalid-input");
    inputs.each(function() {
        $(this).removeClass("invalid-input");
        $(this).removeClass("valid-input");
    });

    removeErrorMessages();
};

const validateElements = () => {
    let valid = true;
    const inputs = $("form").find("input");

    inputs.each(function() {
        if ($(this).val() === "") {
            setInvalid($(this));
            valid = false;
        }
    });

    return valid;
};

const validateNumber = () => {
    const input = $("#number");
    const x=input.val().toString();
    if (!((x.startsWith("+7") || x.startsWith("+3")) && Number(x).toString().length>=9 && Number(x).toString().length<=11)) {
        setInvalid(input);
        displayErrorMessage("number", "Номер должен содержать от 9 до 11 цифр и начинаться с +3 или +7!");
        return false;
    }
    return true;
};

const validateName = () => {
    const input = $("#name");
    const x=input.val().toString();
    if (x.split(" ").length!==3) {
        setInvalid(input);
        displayErrorMessage("name", "Необходимо ввести ФИО полностью!")
        return false;
    }
    return true;
};

const validateEmail = () => {
    const input = $("#email");
    if (!validateEmailString(input.val().toString())) {
        setInvalid(input);
        displayErrorMessage("email", "Необходимо ввести корректный адрес почты!")
        return false;
    }
    return true;
};

const validateTest = () => {
    const question1 = $("#question1");
    let question2 = true;
    const question2Ch1 = $("#plane");
    const question2Ch2 = $("#bolt");
    const question2Ch3 = $("#vent");
    const question2Ch4 = $("#scissors");
    const question3 = $("#dropdown2");
    let erroneousAnswers = "";
    if (question1.val().toString().toLowerCase()!=="спецификация"){
        setInvalid(question1);
        displayErrorMessage("question1", "Неверный ответ");
        erroneousAnswers+="1";
    }
    if (question2Ch1.is(':checked')){
        setInvalid($("#plane-label"))
        question2=false;
    }
    if (!question2Ch2.is(':checked')){
        setInvalid($("#bolt-label"));
        question2=false;
    }
    if (!question2Ch3.is(':checked')){
        setInvalid($("#vent-label"));
        question2=false;
    }
    if (question2Ch4.is(':checked')){
        setInvalid($("#scissors-label"));
        question2=false;
    }
    if (!question2){
        if (erroneousAnswers!==""){
            erroneousAnswers+=", ";
        }
        erroneousAnswers+="2";
    }
    if (question3.val().toString()!=="Прямые линии"){
        setInvalid(question3);
        if (erroneousAnswers!==""){
            erroneousAnswers+=", ";
        }
        erroneousAnswers+="3";
    }
    const result=$("#result");
    if (erroneousAnswers.length===1){
        result.text("Были допущены ошибки в задании "+erroneousAnswers);
    }
    else if (erroneousAnswers.length>1){
        result.text("Были допущены ошибки в заданиях "+erroneousAnswers);
    }
};

$("#but3").on( "click", () => {
    $("body").prepend("<div id='fullscreen-overlay'>" +
        "<div class='pop-up'>Вы точно уверены, что хотите стереть все данные?" +
        "<div class='bottom-buttons'><button id='yes-popup'>Да</button><button id='no-popup'>Нет</button></div></div></div>");
    $("#yes-popup").on("click", () => {
        $("#fullscreen-overlay").remove();
        $("#survey-form").trigger("reset");
        setValidElements();
    });
    $("#no-popup").on("click", () => {
        $("#fullscreen-overlay").remove();
    })
});

$("#name").on("change", () => {
    setValid($("#name"));
    validateName();
});