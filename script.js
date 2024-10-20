if (screen.width < 1282){
    alert("Your screen is not supported! Website might not work as intended!")
}

/*const registerVisit = (pageName) => {
    let visits = localStorage.getItem(pageName);
    if (visits) {
        localStorage.setItem(pageName, (parseInt(visits)+1).toString())
    }
    else{
        localStorage.setItem(pageName, "1");
    }
    console.log(localStorage);
    console.log(localStorage.getItem(pageName));
};*/

const cookieToObject = (cookieString) => {
    console.log(cookieString);
    if(!cookieString){
        return {};
    }
    let cookies = cookieString.split("; ");
    let newCookies = [];
    cookies.forEach(cookie => {
        cookie = cookie.split("=");
        cookie[0]='"'+cookie[0]+'"';
        cookie[1]='"'+cookie[1]+'"';
        cookie=cookie[0]+":"+cookie[1];
        newCookies.push(cookie);
    })
    let cookiesJSON="";
    newCookies.map(cookie => {
        cookiesJSON += cookie;
        cookiesJSON += ", ";
    })
    cookiesJSON=cookiesJSON.substring(0, cookiesJSON.length - 2);
    cookiesJSON = "{"+cookiesJSON+"}";
    console.log(cookiesJSON);
    return JSON.parse(cookiesJSON);
}

const registerVisit = (pageName) => {
    let visits = sessionStorage.getItem(pageName);
    if (visits) {
        sessionStorage.setItem(pageName, (parseInt(visits)+1).toString())
    }
    else{
        sessionStorage.setItem(pageName, "1");
    }
    if (!getCookie(pageName)) {
        setCookie(pageName, "1", 10);
    }
    else{
        updateCookieCount(pageName);
    }
    console.log(sessionStorage);
    console.log(sessionStorage.getItem(pageName));
    console.log(getCookie(pageName));
};

const setCookie = (name, value, expirationDays) => {
    let date=new Date();
    date.setDate(date.getDate()+expirationDays);
    document.cookie = name + "=" + value + ";path=/; expires=" + date.toUTCString();
};

const getCookie = (name) => {
    let cookieName = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
};

const updateCookieCount = (name) => {
    let cookieObject = cookieToObject(document.cookie.toString());
    cookieObject[name]=(parseInt(cookieObject[name])+1).toString();
    setCookie(name, cookieObject[name], 10);
};

const clockElement = document.createElement("div");
clockElement.id = "clock";
document.querySelector("footer").prepend(clockElement);

const setTime = () => {
    const date = new Date();
    clockElement.textContent = date.toLocaleString("ru-RU");
    setTimeout(setTime, 1000);
}

setTime();