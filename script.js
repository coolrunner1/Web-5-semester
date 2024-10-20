if (screen.width < 1282){
    alert("Your screen is not supported! Website might not work as intended!")
}
const clockElement = document.createElement("div");
clockElement.id = "clock";
document.querySelector("footer").prepend(clockElement);


const setTime = () => {
    const date = new Date();
    clockElement.textContent = date.toLocaleString("ru-RU");
    setTimeout(setTime, 1000);
}

setTime();