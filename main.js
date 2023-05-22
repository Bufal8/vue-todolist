/*
Rifare l’esercizio della to do list.
Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
*/



const {createApp} = Vue;

createApp({
    data(){
        return {
            error: false,
            newTask: {
                testoTask: '',
                doneTask: false
            },
            tasks: [
                {
                    testoTask: '',
                    doneTask: false
                },
                
            ]
        }
    },
    methods: {
        aggiungiTask(){
            // Controllo possibile stringa vuota: se newTask è diverso da stringa vuota e più lungo di 5 caratteri
            if(this.newTask !== '' && this.newTask.length >= 5){
                // Inserisco nell'array tasks la newTask inserita nell input utilizzando unshift che svolge la stessa funzione di un push ma aggiunge per primo l'elemento invece che in fondo
                this.tasks.unshift(this.newTask);
                
                // se entro in questa condizione significa che non c'è un errore quindi setto il valore del data error su false
                this.error = false;
            }else{
                // 
                this.error = true;
            }

            // Svuoto il box newTask
            this.newTask='';
        },
        rimuoviTask(indice){
            // Con il metodo nativo di js 'splice' posso selezionare un elemento tramite la posizione (in questo caso indicato con l'indice) e dopo la virgola indicare quanti cancellarne (in questo caso 1)
            this.tasks.splice(indice, 1);
        }
    }

}).mount("#app")

