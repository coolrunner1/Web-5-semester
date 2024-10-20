document.getElementById("but4").onclick = () => {
    setValidElements();
    if (validateElements()){
        validateName();
        validateTest();
    }
};