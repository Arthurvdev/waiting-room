/*document.addEventListener("click", () => {
    const main = document.querySelector('.audio_main');
    if (main) main.play();
}, { once: true });*/

function escada() {
    const black = document.querySelector('.black');
    const main = document.querySelector('.main');
    const passos = document.querySelector('.passos');
    const escada = document.querySelector('.escada');
    console.log("click");

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