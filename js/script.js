const { createApp } = Vue
    createApp({
        data(){
            return{
                people: [
                    { 
                        id: 1,
                        name: "Light Yagami",
                        cause: "Sconfitto da un ragazzino",
                        done: true
                    },
                    { 
                        id: 2,
                        name: "Eren Jaeger",
                        cause: "",
                        done: false
                    },
                    { 
                        id: 3,
                        name: "Kaido",
                        cause: "Annientato da Luffy",
                        done: true
                    },
                ],
                lastId: 3,
                showCanvaB: false,
                maxInput: 15,
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
                inputCause: "",
                openBookCoverClass: "",
                coverDiv: "",
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
                    cause: this.inputCause,
                }

                if(this.input !== "" && this.input !== " "){
                    this.people.push(newPerson);
                }
                
                this.input = "";
                this.inputCause = "";
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
            openCoverBook(){
                this.openBookCoverClass = this.openBookCoverClass === "book-cover2" ? "" : "book-cover2"
                this.coverDiv = this.coverDiv === "book-cover-div" ? "" : "book-cover-div"
            }
        },
        mounted(){
            this.startAutoPlay()
        }
    }).mount('#app')
