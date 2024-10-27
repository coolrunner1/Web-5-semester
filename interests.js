const displayInterests = (...interests) => {
    const interestsContainer = $("#interests-container");
    interestsContainer.html("<"+interests[0]+"l><lh>"+interests[1]+"</lh></"+interests[0]+"l>");
    for (let i = 2; i < interests.length; i++) {
        interestsContainer.children().append("<li><a href='#int"+(i-1)+"' class='hero-secondary-but black-but'>"+interests[i]+"</a></li>");
    }
};

displayInterests(
    "o",
    "Содержимое",
    "Одним из моих главных хобби являются игры",
    "Я активно изучаю английский язык",
    "Книги занимают особое место в моем сердце",
    "Фильмы тоже играют важную роль в моей жизни"
);

(async () => {
    await registerVisit("my-interests");
})();