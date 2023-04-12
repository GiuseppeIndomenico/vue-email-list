const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: 'Random Mail Generator with API',
            basePath: 'https://flynn.boolean.careers/exercises/api/random/',

            randomMails: []



        }



    },
    methods: {
        getMail() {
            this.randomMails = [];
            for (let i = 1; i < 11; i++) {
                axios.get(this.basePath + 'mail').then(
                    (res) => {
                        this.randomMails.push(res.data.response)
                        // console.log(res.data.response);
                    })
            }
        }
    },
    mounted() { this.getMail() }
}).mount('#app');  