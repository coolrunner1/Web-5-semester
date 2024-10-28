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
    const table = $("<table id='session-table'><th>Страница</th><th>Количество посещений</th></table>");
    for (const pageName in pageNames) {
        if (sessionStorage.getItem(pageName)) {
            const tr = $("<tr><td>"+pageNames[pageName]+"</td><td>"+sessionStorage.getItem(pageName)+"</td></tr>")
            table.append(tr);
            //console.log(pageName + " " + pageNames[pageName] + " " + sessionStorage.getItem(pageName));
        }
    }
    const storage = $("#session-table");
    if (storage.length) {
        storage.remove();
    }
    $("#session-storage-stats").append(table);
}

const cookieToTable = async () => {
    const table = $("<table id='cookies-table'><th>Страница</th><th>Количество посещений</th></table>");
    const cookiesObject = await cookieToObject(document.cookie.toString());
    //console.log("cookies object", cookiesObject);
    for (const pageName in pageNames) {
        if (cookiesObject.hasOwnProperty(pageName)) {
            const tr = $("<tr><td>"+pageNames[pageName]+"</td><td>"+cookiesObject[pageName]+"</td></tr>")
            table.append(tr);
            //console.log(pageName + " " + pageNames[pageName] + " " + sessionStorage.getItem(pageName));
        }
    }
    const storage = $("#cookies-table");
    if (storage.length) {
        storage.remove();
    }
    $("#cookie-storage-stats").append(table);

}


$("#get-session-storage-stats").on("click", async event => {
    await sessionStorageToTable();
});

$("#get-cookie-storage-stats").on("click", async event => {
    await cookieToTable();
});