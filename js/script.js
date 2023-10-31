const { createApp } = Vue
    createApp({
        data(){
            return{
                showCanvaB: false,
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
                ]
            }
        },
        methods: {
            showCanva(){
                this.showCanvaB = true 
            },
            closeCanva(){
                this.showCanvaB = false 
            },
        },
        mounted(){
            
        }
    }).mount('#app')
