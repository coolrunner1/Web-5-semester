$("#number").on("change", () => {
    setValid($("#number"));
    validateNumber();
});

$("#email").on("change", () => {
    setValid($("#email"));
    validateEmail();
});

(async () => {
    await registerVisit("contact");
})();