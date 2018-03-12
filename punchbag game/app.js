new Vue({
    el: '#app',
    data: {
        health: 100,
    },
    methods: {
        punch: function () {
            this.health -= 10;
        },
        restart: function () {
            this.health = 100;
        }
    },
    computed: {
        burst: function () {
            return {
                backgroundImage: this.health <= 0 ? 'url(./bag-burst.png)' : ''
            }
        },
        gameEnded: function () {
            return this.health <= 0;
        }
    }
})