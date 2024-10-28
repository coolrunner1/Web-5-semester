$("#but4").on("click",() => {
    setValidElements();
    if (validateElements()){
        validateName();
        validateTest();
    }
});

$("#but2").on("click", () => {
    setValidElements();
    if (validateElements()){
        if(validateName()){
            $("body").prepend("<div id='fullscreen-overlay'>" +
                "<div class='pop-up'>Вы точно уверены, что хотите отправить письмо?" +
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
    await registerVisit("test");
})();