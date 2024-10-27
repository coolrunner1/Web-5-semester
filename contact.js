$("#number").on("change", () => {
    setValid($("#number"));
    validateNumber();
});

$("#email").on("change", () => {
    setValid($("#email"));
    validateEmail();
});

$("#but2").on("click", () => {
    setValidElements();
    if (validateElements()){
        if(validateName() && validateNumber() && validateEmail()){
            $("body").prepend("<div id='fullscreen-overlay'><div class='pop-up'>Вы точно уверены, что хотите отправить письмо?<button id='yes-popup'>Да</button><button id='no-popup'>Нет</button></div></div>");
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