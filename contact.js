const tips = {"name":"Пример: Иванов Иван Иванович", "email":"Пример: example@example.com",
    "number":"Пример: +7777777777", "age":"Положительное число от 1 до 150", "text":"Пример: Советы по поводу улучшения сайта"};

$.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    console.log(viewportTop, viewportBottom);
    console.log(elementTop, elementBottom);

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