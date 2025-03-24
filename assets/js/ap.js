/* Si creano in variabili gli elementi da utilizzare */
const sectionD = document.createElement('section');
const counterD = document.createElement('h2');
const testoD = document.createElement('p');
const inputD = document.createElement('input');

counterD.textContent = 'Contatore creato con JavaScript e aggiunto dinamicamente al DOM';

/*===================================================================== */
/*=== struttura che si desidera creare per il contatore senza stili === */
/*
  <section id="sezionePrima">
    <div id="divSP-1">
      <div id="divSP-2">
        <h2>texto como encabezado</h2>
        <div id="divSP-3">
          <div id="divSP-4">
            <div id="divSP-5">
              <button id="btnSP-1"></button>
              <input>
              <button id="btnSP-2"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  */
 /*================================================================= */
 /*================================================================= */



/* ======= funzioni che permettono di riutilizzare il codice ======== */




function creareButton(parentD,quantitaD,nomeParent){
  
  let quantita = parseInt(quantitaD);
  for(let i=1; i<=quantita; i++)
  {
      const btnD = document.createElement('button');
      btnD.id = `btn${nomeParent}-${i}`;
      parentD.appendChild(btnD);
  }
}

function inserireElementoPrima(elementoParent,elementoDaInserire,elementoSotto)
{
  elementoParent.insertBefore(elementoDaInserire,elementoSotto);
}


/* ============= creazione dell'elemento sezionePrima ======== */

sectionD.id = 'sezionePrima';
document.body.appendChild(sectionD);


/* ======== creazione e aggiunta di elementi al nostro layout, bottoni, input, ecc... con funzione ======== */

creareDiv(document.getElementById('sezionePrima'),5,'SP');

inserireElementoPrima(document.getElementById('divSP-2'),counterD,document.getElementById('divSP-3'));

creareButton(document.getElementById('divSP-5'),2,'SP');

inputD.id = 'inputD';
inserireElementoPrima(document.getElementById('divSP-5'),inputD,document.getElementById('btnSP-2'));

//document.getElementById('div-2').appendChild(counterD); aggiungo l'elemento alla fine
// document.getElementById('div-2').insertBefore(counterD, document.getElementById('div-3')); è possibile creare una funzione


//sectionD.appendChild(divD);
//document.body.appendChild(container);
//divD.appendChild(counterD);


/* se agregan las clases de boostrap */
//document.getElementById('sezionePrima').classList.add('py-5');
//divD.classList.add('container', 'text-cennter');


