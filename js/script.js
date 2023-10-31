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
                carouselImage: [
                    {
                        image: 'img/carousel-1.png',
                        name: 'Ryuk',
                        id: 1
                    },
                    {
                        image: 'img/carousel-2.png',
                        name: 'L',
                        id: 2
                    },
                    {
                        image: 'img/carousel-3.png',
                        name: 'Light',
                        id: 3
                    },
                    {
                        image: 'img/carousel-4.png',
                        name: 'Mello',
                        id: 4
                    },
                    {
                        image: 'img/carousel-5.png',
                        name: 'Misa',
                        id: 5
                    },
                ],
                activeSlideCarousel: 0,
                interval: null,
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
                    done: false,
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
            },
            nextImage(){
                (this.activeSlideCarousel === this.people.length - 1) ? this.activeSlideCarousel = 0 : this.activeSlideCarousel++;
            },
            startAutoPlay(){
                this.interval = setInterval(this.nextImage, 2500);
            },
        },
        mounted(){
            this.startAutoPlay()
        }
    }).mount('#app')
