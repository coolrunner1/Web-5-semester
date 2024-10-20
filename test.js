document.getElementById("but4").onclick = () => {
    setValidElements();
    if (validateElements()){
        validateName();
        //validateAge();
        validateTest();
    }
};

(async () => {
    await registerVisit("test");
})();