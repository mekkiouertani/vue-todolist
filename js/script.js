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
                input: "",
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
                this.people.push(newPerson);
                this.input = "";
                console.log(this.people);
            },
            removePerson(index){
                this.people.splice(index, 1)
            },
        },
        mounted(){
            
        }
    }).mount('#app')
