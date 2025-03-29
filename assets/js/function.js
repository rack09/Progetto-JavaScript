/* ---------------------------------------------------------------- */
/* ------- Funzioni per gestire dinamicamente il contatore ------- */

let value = 0;


document.getElementById('divSP-5').addEventListener('click', (event) => {
    if (event.target.id === 'btnSP-1') {
        value--;
    } else if (event.target.id === 'btnSP-2') {
        value++;
    }
    inputD.value = value;
});

/*
document.getElementById('btnSP-1').addEventListener('click', ()=> {
    value--;
    inputD.value = value;
});

document.getElementById('btnSP-2').addEventListener('click', () => {
    value ++;
    inputD.value = value;
});
*/

/* ------------------------------------------------------------------------------ */
/* ------- Funzioni per gestire la versione responsive della navbar------ ------- */

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    const menu = document.querySelector('.my-collapse');
    menu.classList.toggle('show');
});