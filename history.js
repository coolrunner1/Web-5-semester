const pageNames={
    "main-page":"Главная страница",
    "about-me":"Обо мне",
    "my-interests":"Мои интересы",
    "studies":"Учёба",
    "gallery":"Галерея",
    "contact":"Контакт",
    "test":"Тест",
    "history":"История"
};

(async () => {
    await registerVisit("history");
})();

const sessionStorageToTable = async () => {
    const table = document.createElement("table");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.textContent="Страница";
    th2.textContent="Количество посещений";
    table.appendChild(th1);
    table.appendChild(th2);
    table.id="session-table";
    for (const pageName in pageNames) {
        if (sessionStorage.getItem(pageName)) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.textContent=pageNames[pageName];
            td2.textContent=sessionStorage.getItem(pageName);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            console.log(pageName + " " + pageNames[pageName] + " " + sessionStorage.getItem(pageName));
        }
    }
    const storage = document.getElementById("session-table");
    if (storage) {
        document.getElementById("session-table").remove();
    }
    document.getElementById("session-storage-stats").appendChild(table);
}

const cookieToTable = async () => {
    const table = document.createElement("table");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.textContent="Страница";
    th2.textContent="Количество посещений";
    table.appendChild(th1);
    table.appendChild(th2);
    table.id="cookies-table"
    const cookiesObject = await cookieToObject(document.cookie.toString());
    console.log("cookies object", cookiesObject);
    for (const pageName in pageNames) {
        if (cookiesObject.hasOwnProperty(pageName)) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.textContent=pageNames[pageName];
            td2.textContent=cookiesObject[pageName];
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            console.log(pageName + " " + pageNames[pageName] + " " + sessionStorage.getItem(pageName));
        }
    }
    const storage = document.getElementById("cookies-table");
    if (storage) {
        document.getElementById("cookies-table").remove();
    }
    document.getElementById("cookie-storage-stats").appendChild(table);

}


document.getElementById("get-session-storage-stats").onclick = async event => {
    await sessionStorageToTable();
}

document.getElementById("get-cookie-storage-stats").onclick = async event => {
    await cookieToTable();
}