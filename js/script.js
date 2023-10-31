const { createApp } = Vue
    createApp({
        data(){
            return{
                people: [
                    { 
                        id: 1,
                        name: "Light Yagami",
                        done: true
                    },
                    { 
                        id: 2,
                        name: "Eren Jaeger",
                        done: false
                    },
                    { 
                        id: 3,
                        name: "Kaido",
                        done: true
                    },
                ],
                lastId: 3,
                showCanvaB: false,
                minInput: 25,
                input: "",
                showBeCareful: false,
            }
        },
        methods: {
            showCanva(){
                this.showCanvaB = true 
            },
            closeCanva(){
                this.showCanvaB = false 
            },
            addPerson(){
                this.lastId++;
                const newPerson = {
                    id: this.lastId,
                    name: this.input,
                    done: false
                }

                if(this.input !== "" && this.input !== " "){
                    this.people.push(newPerson);
                }
                
                this.input = "";
                console.log(this.people);
            },
            removePerson(index){
                this.people.splice(index, 1)
            },
            markAsDone(index){
                this.showBeCareful = true
                this.people[index].done = !this.people[index].done
                this.timeRemoveCareful()
            },
            removeCareful(){
                this.showBeCareful = false
            },
            timeRemoveCareful(){
                setTimeout(this.removeCareful, 2000)
            }
        },
        mounted(){

        }
    }).mount('#app')
