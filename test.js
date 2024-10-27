$("#but4").on("click",() => {
    setValidElements();
    if (validateElements()){
        validateName();
        validateTest();
    }
});

(async () => {
    await registerVisit("test");
})();