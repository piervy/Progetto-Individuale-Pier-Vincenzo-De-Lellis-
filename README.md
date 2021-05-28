# Progetto-Individuale-Pier-Vincenzo-De-Lellis-INFOVIS


Crea un file json con dei dati multivariati:
ci sono 10 data-cases e ogni data-case ha cinque variabili quantitative (i cui valori sono tutti positivi). 
Prima disegna questo dataset tramite uno diagramma "stacked bars" (ogni barra è dedicata ad un data-point ed è costituita dalla sovrapposizione delle cinque barre relative alle cinque variabili del data-point). 
Facendo click con il pulsante sinistro del mouse su una sezione della barra, per tutte le barre questa sezione si scambia di posto con la sezione che si trova sopra di essa. 
Fai in maniera che le transizioni siano il più possibile progressive e fluide.
Usa le scale di D3.js per mappare il dominio delle variabili (che è arbitrario) nel range dei valori che ti servono, che invece è determinato dalla tua interfaccia.

Il dataset è stato costruito arbitrariamente usando come dominio di riferimento le marche sportive.
Nell'asse delle x troviamo le marche.
Nell'asse delle y troviamo i guadagni espressi in milioni.
I dati utilizzati sono stati inventati, quindi non fanno riferimento a nessuna fonte.

Requirements
------------
Questo progetto richiede 2 moduli facoltativo:

Libreria D3.js (https://d3js.org/)
Il gestore NPM (https://www.npmjs.com/)

Nella soluzione proposta non abbiamo bisogno del primo modulo perchè le libreria viene importata direttamente dall'html
mentre il secondo viene utilizzato per runnare il server con il comando http-server. 

How to use
------------
Per utilizzarlo bisogna navigare fino cartella dove si trova il file "index.html"dal terminale. Successivamente runnare il comando http-server (dopo averlo installato con il comando npm install -g http-server) e aprile il proprio browser di riferimento su "http://localhost:8080/"(Testato sia su Chrome che su Firefox).
Infine è possibile interagire in due modi differenti con lo stacked bars:
1.Cliccando con il pulsante sinistro su una sezione della barra, per tutte le barre questa si scambierà di posto
2.Muovendo il mouse su una sezione della barra è possibile visualizzare il valore relativo di quest'ultima.



Examples 
------------
![StackedBars1](https://user-images.githubusercontent.com/51997286/119980649-de580780-bfbc-11eb-8fb6-7b1b479584b1.png)
![StackedBars3](https://user-images.githubusercontent.com/51997286/119980714-f62f8b80-bfbc-11eb-81e4-f3fd5eecdf1e.png)
![StackedBars2](https://user-images.githubusercontent.com/51997286/119980699-ef087d80-bfbc-11eb-802f-56e1edde1376.png)



Maintainers
------------
- Pier Vincenzo De Lellis
