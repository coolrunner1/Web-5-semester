const displayInterests = (...interests) => {
    const container = document.getElementById('interests-container');
    const list = document.createElement(interests[0]+'l');
    const lh = document.createElement("lh");
    lh.textContent=interests[1];
    list.appendChild(lh);
    for(let i=2; i<interests.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = interests[i];
        a.href="#int"+(i-1);
        a.classList="hero-secondary-but black-but";
        li.appendChild(a);
        list.appendChild(li);
    }
    container.appendChild(list);
}

displayInterests("o", "Содержимое", "Одним из моих главных хобби являются игры", "Я активно изучаю английский язык", "Книги занимают особое место в моем сердце", "Фильмы тоже играют важную роль в моей жизни");

registerVisit("my-interests");