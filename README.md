# LEARNING TEMPLATE

Questo template è stato sviluppato con lo scopo di velocizzare l'apprendimento dello sviluppo di un sito web lato **front end** con un'architettura semplice e funzionale.

Al primo avvio del progetto eseguire il comando `yarn` o `npm install` e successivamente `yarn start` o `npm run start`

## Struttura delle cartelle

Il progetto contiene un entry point (server.js) che è un file di un applicazione Express e si occupa della renderizzazione del file **index.html** presente nella cartella **public**.

L'aggiunta e la modifica del codice presente nel progetto deve essere fatta esclusivamente nella cartella public che contiene il file **index.html** con lo scheletro del sito web, una cartella styles contenente le informazioni di stile del sito (**scss**) ed una cartella scripts che contiene il file **main.js** ed una sottocartella modules dove verranno creati tutti gli scripts utili con le logiche per il sito.

Il file **global.css** viene auto generato ogni volta che viene modificato il file **global.scss** ed è già importato nell'**index.html**.

Il file main.js è già importato nell'**index.html**.

## Scripts

Sono stati configurati diversi scripts per facilitare e velocizzare lo sviluppo di un progetto:

- **start** Esegue una build dei file scss e avvia il progetto sulla porta 3000
- **start:dev** Come il comando start però verifica una qualsiasi modifica nella cartella **public** ed effettua un refresh automatico dell'applicazione
- **test** Esegue tutti i tests presenti nella cartella public e mostra il code coverage. Verosimilmente sarebbe una soluzione ottimale avere un code coverage del 100% su tutte le funzioni
- **format** Esegue una pulizia del codice secondo gli standard specificati sul file **.eslintrc**. L'ideale sarebbe fare in modo che non ci siano errori nei singoli file sistemandoli manualmente ed abituandosi a scrivere il codice secondo gli standard del progetto.
