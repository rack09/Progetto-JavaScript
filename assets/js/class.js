/*========================================================================================= */
/*========= aggiunta delle classi al bottone e all'input per il contatore =============================*/
/*========================================================================================= */

/*
<div class="input-group" style="max-width: 200px;">
  <button class="btn btn-outline-secondary" type="button" id="btnSP-1">-</button>
  <input type="text" class="form-control text-center" value="0" id="inputD">
  <button class="btn btn-outline-secondary" type="button" id="btnSP-2">+</button>
</div>
*/


const classD = ['btn', 'btn-outline-secondary'];
document.getElementById('btnSP-1').classList.add(...classD);
document.getElementById('btnSP-2').classList.add(...classD);
document.getElementById('btnSP-1').textContent = '-';
document.getElementById('btnSP-2').textContent = '+'


document.getElementById('btnSP-1').type = 'button';
document.getElementById('btnSP-2').type = 'button';

document.getElementById('inputD').classList.add('form-control','text-center');
document.getElementById('inputD').type = 'number';
document.getElementById('inputD').value = 0;
document.getElementById('inputD').disabled = true;

document.getElementById('divSP-5').classList.add('input-group','py-1','counter-input');

 /*=========================================================================== */
 /*=========================================================================== */



/* ================== aggiunta di stili ai div ======================== */

document.getElementById('sezionePrima').classList.add('py-5', 'bg-light','mt-5');
document.getElementById('divSP-1').classList.add('container','text-center');

    // funzione rapida per evitare ripetizioni di document.getElementById().classList.add()

    function aggiungereClasse(id,...classi){
        document.getElementById(id).classList.add(...classi);

    }

aggiungereClasse('divSP-2','row');
aggiungereClasse('divSP-3', 'col-md-4', 'mx-auto');
aggiungereClasse('divSP-4','card','p-3','shadow');

document.querySelector('h2').classList.add('mb-4');


/*========= aggiunta delle classi agli elementi della Navbar  ============================== */
/*========================================================================================= */

/* ------------------- Struttura ---------------------------------------------------------*/

/*
<nav id="idNav" class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div id="divNav-1" class="container">
        <a id="aNav-1" class="navbar-brand" href="../">Portfolio</a>
        <button id="bntNav-1" class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="divNav-2" class="collapse navbar-collapse my-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#chiSono">Chi sono</a></li>
            </ul>
        </div>
    </div>
</nav>
*/

// Navbar principale
aggiungereClasse('idNav', 'navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-primary', 'fixed-top');

// Primo div contenitore della navbar
aggiungereClasse('divNav-1', 'container');

// Link del brand
aNav1.classList.add('navbar-brand'); /* la variabile aNav1 era già stata definita in navbar.js */
aNav1.setAttribute('href', 'https://rack09.github.io/progetto-html-e-css/');
aNav1.textContent = 'Portfolio Melvin Rosales';

// Bottone hamburger
btnNav1.classList.add('navbar-toggler'); /* la variabile btnNav1 era già stata definita in navbar.js */
btnNav1.type = 'button';

// Span del bottone hamburger
spanBtn.classList.add('navbar-toggler-icon'); /* la variabile spanBtn era già stata definita in navbar.js */

// Div collassabile
aggiungereClasse('divNav-2', 'collapse', 'navbar-collapse', 'my-collapse');

// ul + li + a del menu
ulD.classList.add('navbar-nav', 'ms-auto'); /* la variabile ulD era già stata definita in navbar.js */
liD.classList.add('nav-item'); /* la variabile liD era già stata definita in navbar.js */

aNav2.classList.add('nav-link'); /* la variabile aNav2 era già stata definita in navbar.js */

aNav2.setAttribute('href', 'https://rack09.github.io/progetto-html-e-css/cv/index.html');
aNav2.textContent = 'Guarda il mio CV';





