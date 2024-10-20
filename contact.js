document.getElementById("number").onchange = () => {
    setValid(document.getElementById("number"));
    validateNumber();
};

document.getElementById("email").onchange = () => {
    setValid(document.getElementById("email"));
    validateEmail();
};