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
                const gallery = document.getElementById("middle");
                const row = document.createElement("div");
                row.className = "my-images";
                gallery.appendChild(row);
                for (let j=i; j<i+columns; j++){
                    const imageBox = document.createElement("div");
                    imageBox.className = "img-intern";
                    row.appendChild(imageBox);
                    const image = document.createElement("img");
                    image.className = "image-with-border";
                    image.src = photos[j];
                    image.title = titles[j];
                    image.alt = titles[j].toLowerCase();
                    image.onclick = () => fullscreenDisplay(image.src);
                    imageBox.appendChild(image);
                    const title = document.createElement("div");
                    title.className = "img-descr";
                    title.textContent = titles[j];
                    imageBox.appendChild(title);
                }
            }
            resolve("Gallery items have been added.")
        } catch (error) {
            reject(`Failed to add items to the gallery: ${error}`);
        }
    });

};

const fullscreenImage=document.createElement('img');
fullscreenImage.className = "resizable-image";

const fullscreenDisplay = (image) => {
    fullscreenImage.src=image;
    const fullscreenView = document.createElement("div");
    fullscreenView.id="fullscreen-image-view";
    fullscreenView.onclick = () => document.getElementById("fullscreen-image-view").remove();
    fullscreenView.appendChild(fullscreenImage);
    document.body.prepend(fullscreenView);
}

(async () => {
    await galleryElements(3, titles.length);
})();

(async () => {
    await registerVisit("gallery");
})();