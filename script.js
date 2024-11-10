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
    const question3 = $("#dropdown2");
    if (question3.val().toString()!=="Прямые линии"){
        setInvalid(question3);
    }
};

const tips = {"name":"Пример: Иванов Иван Иванович", "email":"Пример: example@example.com",
    "number":"Пример: +7777777777", "age":"Положительное число от 1 до 150", "text":"Пример: Советы по поводу улучшения сайта"};

$.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementBottom < viewportBottom;
};

const addTip = (input, textContent) => {
    if ($("#"+input+"-tip").length){
        return;
    }
    const container = $("#"+input+"-container");
    const content = $("<div class='pop-up-tip' id='"+input+"-tip'> "+textContent+" </div>");
    container.append(content);
    if (!$("#"+input+"-tip").isInViewport()){
        $("#"+input+"-tip").remove();
        container.prepend(content);
    }
    setTimeout(() => {
        $("#"+input+"-tip").remove();
    }, 3000);
};

$("#number").on("change", () => {
    setValid($("#number"));
    validateNumber();
});

$("#email").on("change", () => {
    setValid($("#email"));
    validateEmail();
});

$("input").on("click", function() {
    console.log($(this).attr('id'));
    if ($(this).attr('id')!=="date"){
        addTip($(this).attr('id'), tips[$(this).attr('id')]);
    }
});


$("#but2").on("click", () => {
    setValidElements();
    if (validateElements()){
        if(validateName() && validateNumber() && validateEmail()){
            $("body").prepend("<div id='fullscreen-overlay'><div class='pop-up'>Вы точно уверены, что хотите отправить письмо?" +
                "<div class='bottom-buttons'><button id='yes-popup'>Да</button><button id='no-popup'>Нет</button></div></div></div>");
            $("#yes-popup").on("click", () => {
                $("#fullscreen-overlay").remove();
                $("#survey-form").trigger("submit");
            });
            $("#no-popup").on("click", () => {
                $("#fullscreen-overlay").remove();
            })
        }
    }
});

(async () => {
    await registerVisit("contact");
})();

$(".input-container").prepend("<div class='input-filler-top'></div>")

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

$("#but4").on("click",() => {
    setValidElements();
    if (validateElements()){
        validateName();
        validateEmail();
        validateNumber();
        validateTest();
    }
});


$("#name").on("change", () => {
    setValid($("#name"));
    validateName();
});

$("footer").prepend("<div id='clock'>penis</div>")

const setTime = async() => {
    const date = new Date();
    $("#clock").text(date.toLocaleString("ru-RU"));
    setTimeout(await setTime, 1000);
}

(async () => {
    await setTime();
})();