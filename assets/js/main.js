const { createApp } = Vue

const app = createApp({
    data() {
        return {
            currentImage: 0,
            characters: [
                {
                    name: 'Bumblebee',
                    info: 'Bumblebee è un Autobot gioviale e leale, noto per la sua abilità di trasformarsi in un piccolo veicolo giallo. È spesso il braccio destro di Optimus Prime e ha un forte legame con gli umani.',
                    path: './assets/img/bumblebee.jpg'
                },
                {
                    name: 'Lockdown',
                    info: 'Lockdown è un cacciatore di taglie cyborg, apparso come avversario nei Transformers. Con uno spietato senso di giustizia, è noto per catturare e imprigionare gli altri Transformers per conto proprio.',
                    path: './assets/img/lockdown.jpg'
                },
                {
                    name: 'Megatron',
                    info: "Megatron è il carismatico e spietato leader dei Decepticon, gli acerrimi nemici degli Autobot. La sua trasformazione è di solito un cannone o un veicolo futuristico, ed è l'archetipo del cattivo nel mondo di Transformers.",
                    path: './assets/img/megatron.jpg'
                },
                {
                    name: 'Optimus Prime',
                    info: "Optimus Prime è il valoroso leader degli Autobot, noto per la sua saggezza, coraggio e senso dell'onore. Si trasforma in un camion e guida la lotta contro i Decepticon per la libertà e la giustizia.",
                    path: './assets/img/optimus-prime.jpg'
                },
                {
                    name: 'Shockwave',
                    info: ' Shockwave è un brillante scienziato e stratega dei Decepticon. Caratterizzato dalla sua fedeltà a Megatron, ha una mente analitica e spesso è visto come uno dei cervelli dei Decepticon. Si trasforma in un cannone o in un veicolo futuristico.',
                    path: './assets/img/shockwave.jpg'
                }
            ],
            intervalScroll: null,
            reverseButtonClicked: false
        }
    },
    created() {
        setTimeout(() => {

            this.autoScroll()

        }, 3000);
    },
    methods: {
        changeImageUp() {

            this.currentImage === this.characters.length - 1 ? this.currentImage = 0 : this.currentImage++;
        },
        changeImageDown() {

            this.currentImage === 0 ? this.currentImage = this.characters.length - 1 : this.currentImage--;
        },
        autoScroll() {

            this.intervalScroll = setInterval(() => {

                if (this.reverseButtonClicked === false) {

                    this.changeImageUp();

                } else {

                    this.changeImageDown();
                }
            }, 3000);

        },
        toggleReverseButton() {
            this.reverseButtonClicked = !this.reverseButtonClicked;
            console.log(this.reverseButtonClicked)
        },
        startStopButton() {
            if (this.intervalScroll) {

                clearInterval(this.intervalScroll);
                this.intervalScroll = null;
                console.log(this.intervalScroll)

                console.log('intervallo terminato')

            } else {

                this.autoScroll();

                console.log('intervallo ripreso')
            }
        },
        stopOver() {

            clearInterval(this.intervalScroll);
            this.intervalScroll = null;
            console.log(this.intervalScroll)

            console.log('intervallo terminato')

        },
        startLeave() {

            this.autoScroll();

            console.log('intervallo ripreso')
        }
    }
}).mount('#app')