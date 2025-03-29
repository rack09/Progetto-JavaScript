# 🎨 Contatore JavaScript - Melvin Rosales

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/it/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/it/docs/Web/CSS)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/it/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)](https://pages.github.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)](https://git-scm.com/)

Questo è il progetto finale del modulo JavaScript del master Full Stack Development (Start2impact).

## 🚀 Descrizione del progetto

🛠️ **Progetto realizzato interamente in JavaScript Vanilla** (senza framework come React, Vue o Angular).  
📄 Tutti gli elementi del `body` della pagina **index.html** sono stati **generati e inseriti dinamicamente nel DOM** tramite funzioni native come `document.createElement()` e `appendChild()`.

🎨 Per la parte visiva è stato utilizzato **Bootstrap** esclusivamente come framework di stile, aggiungendo le sue classi direttamente via JavaScript.

💡 Inoltre, è stato incluso un **file CSS personalizzato** per:
- ✂️ **Rimuovere gli spinner** predefiniti degli input `number`.
- 🎯 **Eliminare l'ombreggiatura grigia** di Bootstrap sugli input con `disabled` per un design più pulito e coerente.

🧩 Questo progetto dimostra un approccio **full client-side rendering** utilizzando solo le **DOM API** native.




## 🚀 Demo online

- 👉 [Contatore JavaScript](https://rack09.github.io/Progetto-JavaScript/)
- 👉 [Repository GitHub](https://github.com/rack09/Progetto-JavaScript)


## ✨ Caratteristiche principali

- ✅ **DOM interamente dinamico:** tutti gli elementi visibili della pagina vengono creati e inseriti nel DOM tramite **JavaScript**.
- ✅ **Senza framework JS:** il progetto è realizzato esclusivamente con **JavaScript puro**, senza l'uso di librerie o framework esterni.
- ✅ **Componenti generati via codice:** navbar, sezioni, div annidati, pulsanti e input sono tutti creati utilizzando metodi nativi come `document.createElement()`.
- ✅ **Separazione logica dei file:** la creazione degli elementi, l'aggiunta delle classi di stile e la gestione degli eventi sono suddivise in file JS dedicati.
- ✅ **Contatore interattivo:** il progetto include un contatore con pulsanti per incrementare/decrementare il valore, controllato via DOM.
- ✅ **Compatibilità responsive:** grazie alle classi Bootstrap aggiunte via JS e a stili CSS personalizzati per un layout fluido e responsivo.

## 🗂️ Struttura del progetto
```
📂 /progetto-javascript
│
├── 📂 /assets
│   ├── 📂 /css
│   │   └── 🎨 style.css              # Stili personalizzati
│   ├── 📂 /js
│   │   ├── 🟥 navbar.js              # Creazione della struttura base della navbar
│   │   ├── 🟨 ap.js                  # creazione della struttura base del contatore richiesto
│   │   ├── 🟦 class.js               # Aggiunta di classi (es. Bootstrap)
│   │   └── 🟩 function.js            # Gestione eventi (contatore + navbar)
│
├── 📝 index.html                     # HTML minimale con link agli script
├── 📄 README.md                      # Documentazione del progetto
└── ⭐ favicon.ico                    # Icona del sito
```

## 🚀 Navbar generata dinamicamente  *(vedi [`navbar.js`](./assets/js/navbar.js))*

🔧 La barra di navigazione è stata **costruita e inserita interamente nel DOM via JavaScript**, senza scrivere alcun elemento HTML all’interno del file `index.html`.

Tutti i componenti (link, pulsanti e contenitori) sono stati generati tramite funzioni come `document.createElement()` e `appendChild()`.

---

### 🧩 **Struttura della navbar creata via JS**

```html
<nav id="idNav">
    <div id="divNav-1">
        <a id="aNav-1">Portfolio Melvin Rosales</a>
        <button id="bntNav-1">
            <span></span>
        </button>
        <div id="divNav-2">
            <ul>
                <li><a id="aNav-2">Guarda il mio CV</a></li>
            </ul>
        </div>
    </div>
</nav>
```
### ✨ Cosa evidenziare

- 🛠️ **0 HTML statico:** la navbar è completamente creata via **JavaScript Vanilla**.
- 🧱 **Struttura annidata** composta da `<div>`, `<a>`, `<button>` e `<ul>`.
- 🎨 Le classi di stile di **Bootstrap** vengono applicate dinamicamente via `classList.add()`.
- ⚡ **Completamente responsive** e gestita in modo dinamico al caricamento della pagina.

## 🧩 **Contatore**  *(vedi [`app.js`](./assets/js/app.js))*

La seguente **struttura HTML** viene creata ed inserita dinamicamente nel DOM tramite **JavaScript**, senza essere scritta direttamente nel file `index.html`.

Questa sezione rappresenta il layout completo del **contatore**, con i pulsanti di incremento/decremento e l'input centrale generati al caricamento della pagina.

---

### 🏗️ **Struttura generata per il contatore**

```html
<section id="sezionePrima">
    <div id="divSP-1">
        <div id="divSP-2">
            <h2>testo come intestazione</h2>
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
```
### ✨ Caratteristiche della sezione

- 🟢 Generata **interamente via JS** utilizzando `document.createElement()` e `appendChild()`.
- 🟢 Layout con **div annidati** e struttura flessibile.
- 🟢 Include un **contatore** con due pulsanti e un input centrale.
- 🟢 Personalizzazione dinamica delle classi **Bootstrap** e degli attributi (es. `type`, `disabled`, `value`).

## ⚙️ Funzionalità di `function.js`

Il file [`function.js`](./assets/js/function.js) contiene le funzioni che gestiscono la logica interattiva del progetto:

### 🟢 **Contatore**
- Contiene le funzioni per **incrementare e decrementare dinamicamente** il valore del contatore.
- L'input del contatore è disabilitato e può essere modificato solo attraverso i due pulsanti laterali (`+` e `-`).

### 🟢 **Navbar responsive**
- Non potendo utilizzare librerie esterne (solo **JavaScript vanilla**), la funzionalità di **collapse responsive** della navbar, normalmente gestita da Bootstrap, è stata **ricreata manualmente**.
- Ho sviluppato una piccola funzione custom in **JS puro** per aprire/chiudere la navbar nei dispositivi mobili.

## 🏷️ Convenzione sui prefissi degli elementi

Per organizzare meglio la struttura del progetto e facilitare la gestione via **JavaScript**, ho adottato un sistema di prefissi per differenziare gli elementi creati dinamicamente:

### 🔵 **Prefissi utilizzati**

| Prefisso | Significato                                   | Esempio                   |
|----------|-----------------------------------------------|---------------------------|
| `NAV-`   | Elementi della **navbar**                    | `id="aNav-1"`, `id="btnNav-1"` |
| `SP-`    | Elementi della **Sezione Prima** (contatore) | `id="divSP-1"`, `id="btnSP-2"` |
| `D-`     | Elementi o variabili legate al **DOM dinamico** | `id="inputD"`, `const inputD = ...` |

- **`D-`** ➡️ Applicato ad alcuni elementi o variabili (es. l'`input`) per indicare che sono stati **creati e aggiunti direttamente al DOM** tramite JS.  
  Lo stesso approccio è stato utilizzato nei file JavaScript: le **`const`** dichiarate con prefisso `D` indicano variabili legate a elementi DOM generati dinamicamente.


### 🎯 **Vantaggio**
Questo sistema permette di:
- Identificare rapidamente la sezione o il contesto di ogni elemento.
- Facilitare la manutenzione e la modifica degli elementi attraverso JS, evitando conflitti o ambiguità nel progetto.

---

## 🛠️ Ottimizzazioni tecniche

Durante lo sviluppo del progetto, ho applicato alcune ottimizzazioni per migliorare la qualità del codice, la scalabilità e la manutenzione.

### 🔁 Event Delegation per i pulsanti del contatore

Per gestire i click sui pulsanti `+` e `-`, inizialmente avevo usato due `addEventListener` distinti.  
Successivamente ho implementato l’**Event Delegation**, assegnando un unico listener al contenitore `divSP-5`.

```js
document.getElementById('divSP-5').addEventListener('click', (event) => {
  if (event.target.id === 'btnSP-1') {
    value--;
  } else if (event.target.id === 'btnSP-2') {
    value++;
  }
  inputD.value = value;
});```




