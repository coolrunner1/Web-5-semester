const photos = [ "./images/nmuax05zxoab1.gif", "./images/xxodzo30yoab1.gif", "./images/fe36cc42774743.57ee5f329fae6.gif",
    "./images/vzkhe4s8dlab1.gif", "./images/java.gif", "./images/gopher-workout.gif", "./images/0*OxDZ95Af_-7Ih_-m.gif",
    "./images/js-javascript.gif", "./images/1*zoZ91dWACun-Acph7snQkw.gif", "./images/1200px-Kotlin_Icon.png",
    "./images/swift-og.png", "./images/2048px-Dart_programming_language_logo_icon.svg.png", "./images/VBA_250x250.png",
    "./images/021521_Fiverr_Pascal.webp", "./images/306px-HolyC_Logo.svg.png"];

const titles = ["C", "C++", "Rust", "C#", "Java", "Go", "Python", "Javascript", "Ruby", "Kotlin", "Swift",
    "Dart", "VBA", "Pascal", "HolyC"];

const galleryElements = async (columns, elements) => {
    return new Promise((resolve, reject) => {
        try {
            for (let i=0; i<elements; i+=columns){
                const gallery = $("#middle");
                const row=$("<div class='my-images'></div>");
                gallery.append(row)
                for (let j=i; j<i+columns; j++){
                    const image=$("<image class='image-with-border'></image>");
                    image.attr("title", titles[j]);
                    image.attr("src", photos[j]);
                    image.attr("alt", titles[j].toLowerCase())
                    image.on("click", () => fullscreenDisplay(image.attr("src").toString()));
                    const imageIntern = $("<div class='img-intern'></div>")
                    imageIntern.append(image);
                    imageIntern.append("<div class='img-descr'>"+titles[j]+"</div>");
                    row.append(imageIntern);
                }
            }
            resolve("Gallery items have been added.")
        } catch (error) {
            reject(`Failed to add items to the gallery: ${error}`);
        }
    });

};

const fullscreenDisplay = (image) => {
    let currentImage = photos.indexOf(image);
    const numberOfImages = photos.length;
    const fullscreenImage=$('<img class="resizable-image" alt="'+titles[currentImage].toLowerCase()+'" title="'+titles[currentImage]+'">');
    fullscreenImage.attr("src", image);
    const fullscreenView = $("<div id='fullscreen-image-view'></div>");
    fullscreenView.on("click", () => fullscreenView.remove());
    fullscreenView.append(fullscreenImage);
    const backButton = $("<button>Назад</button>");
    backButton.on("click", () => {
        fullscreenView.remove();
        if(currentImage-1<0){
            currentImage=numberOfImages;
        }
        fullscreenDisplay(photos[currentImage-1]);
    });
    const forwardButton = $("<button>Вперёд</button>");
    forwardButton.on("click", () => {
        fullscreenView.remove();
        if(currentImage+1>=numberOfImages){
            currentImage=-1;
        }
        fullscreenDisplay(photos[currentImage+1]);
    });
    const navStatus = $("<div id='fullscreen-nav-status' class='hero-secondary'>Фото "+(currentImage+1)+" из "+numberOfImages+"</div>");
    const navigationContainer = $("<div class='fullscreen-view-navigation-container'></div>")
    navigationContainer.append(backButton);
    navigationContainer.append(navStatus);
    navigationContainer.append(forwardButton);
    fullscreenView.append(navigationContainer);
    $("body").prepend(fullscreenView);
}

(async () => {
    await galleryElements(3, titles.length);
})();

(async () => {
    await registerVisit("gallery");
})();