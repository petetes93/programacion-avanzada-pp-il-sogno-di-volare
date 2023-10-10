const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil() {
        const randomIndex = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[randomIndex];
    }

    getRandomMilitary() {
        const randomIndex = Math.floor(Math.random() * this.militaryImages.length);
        return this.militaryImages[randomIndex];
    }

    getAll() {
        
        return this.civilImages.concat(this.militaryImages)
    }
}

class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        const gallery = document.createElement('div');
        gallery.classList.add('gallery');
        document.body.appendChild(gallery);
        this.gallery = gallery;
    }

    createImageTag(imageUrl) {
        const image = document.createElement('img');
        image.src = imageUrl;
        return image;
    }

    paintSingleImage(imageUrl) {
        const img = this.createImageTag(imageUrl);
        this.gallery.appendChild(img);
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach((imageUrl) => {
            const img = this.createImageTag(imageUrl);
            this.gallery.appendChild(img);
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();


