/* Si creano in variabili gli elementi da utilizzare */
const navD = document.createElement('nav');
const ulD = document.createElement('ul');
const liD = document.createElement('li');



/*=========================================================================== */
/*================ struttura base della navbar senza stili ================== */ 
/*
  <nav id="idNav">
        <div id="divNav-1">
            <a id="aNav-1">Portfolio Melvin Rosales</a>
            <button id="bntNav-1">
                <span ></span>
            </button>
            <div id="divNav-2">
                <ul >
                    <li ><a id="aNav-2">Guarda il mio CV</a></li>
                </ul>
                
            </div>
        </div>
        
    </nav>
  */
 /*================================================================= */
 /*================================================================= */



/* ============= funzioni che permettono di riutilizzare il codice ======== */

/* funzione per creare div annidati */

 function creareDiv(parentD,quantitaD,nomeSezione){
    let parent = parentD; 
    let quantita = parseInt(quantitaD); // ci assicuriamo che il parametro venga trattato come numero.
    for(let i = 1; i<=quantita; i++)
        {
            const divD = document.createElement('div');
            divD.id = `div${nomeSezione}-${i}`;
            parent.appendChild(divD);
            parent = divD;
            
        }
  }

  

/* ============= creazione dell'elemento per il Nav con funzione ======== */

navD.id = 'idNav';
document.body.appendChild(navD);

creareDiv(document.getElementById('idNav'),2,'Nav');

/* ============= creazione degli elementi rimanenti senza funzione ======== */

// Creare <a> id="aNav-1"
const aNav1 = document.createElement('a');
aNav1.id = 'aNav-1';
document.getElementById("divNav-1").insertBefore(aNav1,document.getElementById('divNav-2'));

// Creare <button> id="bntNav-1" con <span> all'interno
const btnNav1 = document.createElement('button');
btnNav1.id = 'bntNav-1';
const spanBtn = document.createElement('span');
btnNav1.appendChild(spanBtn);
document.getElementById("divNav-1").insertBefore(btnNav1,document.getElementById('divNav-2'));


// Creare <ul> all'interno di divNav-2
document.getElementById('divNav-2').appendChild(ulD);

// Creare <li> e <a> id="aNav-2" all'interno
const aNav2 = document.createElement('a');
aNav2.id = 'aNav-2';
liD.appendChild(aNav2);
ulD.appendChild(liD);
