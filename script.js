const man = document.querySelector('.man');
const man_sound = document.querySelector('.man_sound');
const song_photos = document.querySelector('.song_photos');
const close_photo1 = document.querySelector('#close_photo1');

man.addEventListener("mouseover", () => {
    man_sound.loop = true; 
    man_sound.play();
});

man.addEventListener("mouseleave", () => {
    man_sound.loop = false; 
    man_sound.pause();
    man_sound.currentTime = 0; 
});

man.addEventListener("click", () => {
    song_photos.loop = true;
    song_photos.play();
});

close_photo1.addEventListener("click", () => {
    song_photos.loop = false;
    song_photos.pause();
    song_photos.currentTime = 0; 
});

const box_img = document.querySelector('.box');
const box_sound = document.querySelector('.box_sound');

box_img.addEventListener("mouseover", () => {
    box_sound.loop = true;
    box_sound.play();
});

box_img.addEventListener("mouseleave", () => {
    box_sound.loop = false;
    box_sound.pause();
    box_sound.currentTime = 0;
});

function escada() {
    const black = document.querySelector('.black');
    const main = document.querySelector('.main');
    const passos = document.querySelector('.passos');
    const escada = document.querySelector('.escada');

    black.style.zIndex = '10';
    black.style.opacity = '100%';
    passos.play();
    

    setTimeout(() => {
        main.style.zIndex = '1';
        main.style.opacity = '0%';
        escada.style.zIndex = '2';
        escada.style.opacity = '100%';
        black.style.zIndex = '-1';
        black.style.opacity = '0%';
        passos.pause();
    }, 2000);

}

function waiting() {
    const black = document.querySelector('.black');
    const passos = document.querySelector('.passos');
    const escada = document.querySelector('.escada');
    const waiting = document.querySelector('.waiting');
    const aip = document.querySelector('.aip');

    black.style.zIndex = '10';
    black.style.opacity = '100%';
    passos.play();
    

     setTimeout(() => {
        escada.style.display = 'none';
        escada.style.opacity = '0%';
        waiting.style.zIndex = '2';
        waiting.style.opacity = '100%';
        black.style.zIndex = '-1';
        black.style.opacity = '0%';
        passos.pause();
        aip.play();
    }, 2000);
}

function box() {
    alert("Você não pode abrir a caixa antes da hora... \n\n You can't open the box before the time...");
    alert("O que pode ter aqui dentro? Qual mistério ou aleatoriedade bizarra te espera? \n\n What could be inside? What mystery or bizarre randomness awaits you?");
}

function photo1() {
    const div_photo = document.querySelector('.photo_1');
    div_photo.style.marginTop = "0vh";

}

function subir_photo1() {
    const div_photo = document.querySelector('.photo_1');
    div_photo.style.marginTop = "-100vh";
}
