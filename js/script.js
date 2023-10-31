const { createApp } = Vue
    createApp({
        data(){
            return{
                showCanvaB: false,
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
